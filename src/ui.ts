import './scss/figma-plugin-ds.scss'

const proxyurl = "https://figma-proxy-server.herokuapp.com/";
const create = document.getElementById('create');
const input = document.getElementById('link');
let country = 'pl';

// Wake up heroku server
(function () {
    fetch(proxyurl);
})();

// Click and copy
(function () {
    document.querySelector('.list.list--tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('list__list-item')) {
            const text = e.target.innerText
            const el = document.createElement('textarea');
            el.value = text;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';

            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            notifyButton(`${text} – copied`);
        }
    });
})();

// Toggle spinner
(function () {
    const countries = document.querySelector('.list.list--countries');

    input.addEventListener('change', (e) => {
        if (e.target.value.length > 0) {
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
        create.innerText = 'Parse';
    }, 500);
}

// Toggle spinner
function toggleSpinner() {
    const initialValue = create.innerText;

    create.innerHTML = `<span class="loading-spinner"></span>`;
    create.disabled = true;

    setTimeout(() => {
        create.disabled = false;
        create.innerText = initialValue;
    }, 5000);
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
    const miintoLink = `https://www.miinto.${country}/guide-m?sort=popular%20desc`;
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };
    const link = input.value || miintoLink;
    const imgArray = [];

    toggleSpinner();

    // TODO Refactor this function
    (function () {
        fetch(proxyurl + link, fetchParams).then((response) => {
            return response.json();
        }).then((resJson) => {
            resJson.products.list.forEach(item => {
                fetch(proxyurl + item.photo_url).then(response => {
                    return response.arrayBuffer()
                }).then(a => {
                    return imgArray.push(new Uint8Array(a));
                });
            });
        }).then(() => {
            (function foo() {
                const request = new XMLHttpRequest();

                request.open('GET', proxyurl + link, true);
                request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                request.setRequestHeader('Content-Type', 'application/json');
                request.setRequestHeader('Accept', '*/*');

                request.onload = () => {

                    parent.postMessage({
                        pluginMessage: {
                            response: request.response,
                            images: imgArray,
                            status: request.status
                        }
                    }, '*')
                }
                request.send()
            })();
        });
    })();
}