import './scss/figma-plugin-ds.scss'

const proxyurl = 'https://figma-proxy-server.herokuapp.com/';
const create = document.getElementById('create') as HTMLInputElement;
const input = document.getElementById('link') as HTMLInputElement;
let country = 'pl';

// Wake up heroku server
(function () {
    fetch(proxyurl);
})();

// Rename layer
(function () {
    document.querySelector('.list.list--tags').addEventListener('click', (e: any) => {

        if (e.target.classList.contains('list__list-item')) {
            const text = e.target.innerText

            parent.postMessage({
                pluginMessage: {
                    type: 'renameLayer',
                    value: text
                }
            }, '*');
        }
    });
})();

// Toggle spinner
(function () {
    const countries = document.querySelector('.list.list--countries');

    input.addEventListener('keyup', (e: any) => {
        if (e.target.value.length !== 0) {
            countries.classList.add('disabled')
        } else {
            countries.classList.remove('disabled')
        }
    });
})();

// Select country
(function () {
    document.querySelector('.list.list--countries').addEventListener('click', function () {
        this.querySelectorAll('.list__list-item').forEach(item => {
            const input = item.querySelector('input');

            if (input.checked) {
                item.classList.add('list__list-item--checked')
                country = input.value;
                notifyButton(`miinto.${input.value} – Selected`)
            } else {
                item.classList.remove('list__list-item--checked')
            }
        });
    })
})();

// Display notification on button
function notifyButton(text) {
    // Copying initial text
    create.innerText = text;
    setTimeout(() => {
        create.innerText = 'Populate';
    }, 500);
}

// Toggle spinner
function toggleSpinner() {
    if (!create.disabled) {
        create.disabled = true;
        create.innerHTML = `<span class='loading-spinner'></span>`;
    } else {
        create.disabled = false;
        create.innerText = 'Populate'
    }
};

// Send on enter
(function () {
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            event.preventDefault();
            create.click();
        }
    });
})();

// Send request
create.onclick = () => {
    const miintoLink = `https://www.miinto.${country}/new-k`;
    const link = input.value || miintoLink;
    const imgArray = [];
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    toggleSpinner();

    (function () {
        fetch(proxyurl + link, fetchParams)
            .then((response) => {
                return response.json();
            })
            .then((result) => {

                result.products.list.forEach((item, index) => {
                    fetch(proxyurl + item.photo_url)
                        .then(response => {
                            return response.arrayBuffer()
                        })
                        .then(img => {
                            imgArray[index] = new Uint8Array(img);
                        });
                });

            })
            .then(() => {

                fetch(proxyurl + link, fetchParams)
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        parent.postMessage({
                            pluginMessage: {
                                type: 'populate',
                                images: imgArray,
                                response
                            }
                        }, '*');
                    });
            });
    })();
}

onmessage = (event) => {
    if (event.data.pluginMessage === 'toggleSpinner') toggleSpinner()
}