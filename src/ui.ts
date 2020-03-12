import './scss/figma-plugin-ds.scss'

const input = document.getElementById('link') as HTMLInputElement;
const countries = document.querySelector('.list.list--countries') as HTMLElement;
const create = document.getElementById('create') as HTMLInputElement;
const searchResults = document.querySelector('.search__list') as HTMLElement;

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let proxyurl = 'https://figma-proxy-server.herokuapp.com/';
let country = 'pl';
let defaultLink = `https://www.miinto.${country}/new-k`;
let link = defaultLink;

// Display notification on button
function notifyButton(text) {
    create.innerText = text;
    setTimeout(() => {
        create.innerText = 'Populate';
    }, 700);
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

// Check server time responses
(function () {
    fetch(proxyurl)
        .then(({ status }) => {
            if (status !== 200) proxyurl = corsAnywhere;
        })
        .catch(() => {
            proxyurl = corsAnywhere;
        });
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
    input.addEventListener('keyup', (e: any) => {
        if (e.target.value.length !== 0) {
            countries.classList.add('disabled')
        } else {
            countries.classList.remove('disabled')
        }
    });
})();

input.addEventListener('search', () => {
    searchResults.classList.remove('search__list--block');
    countries.classList.remove('disabled');
});

input.addEventListener('keyup', function (e) {

    if (this.value && !this.value.match('miinto.')) {
        link = `https://www.miinto.${country}/search?q=${this.value}`;
        let searchQuery = `https://www.miinto.${country}/actions/_get_search_suggestions.php?q=${input.value}`;

        countries.classList.remove('disabled');

        if (this.value.length > 2) {
            searchResults.classList.add('search__list--block');

            fetch(proxyurl + searchQuery)
                .then(result => result.json())
                .then(result => {
                    searchResults.innerHTML = '';

                    result.forEach(item => {
                        const li = document.createElement('li');
                        const span = document.createElement('span');

                        li.className = 'search__list-item';
                        li.innerText = item.terms;

                        span.className = 'search__list-span';
                        span.innerText = item.type;

                        li.appendChild(span);

                        li.addEventListener('click', function (e) {
                            link = `https://www.miinto.${country}/search?q=${item.terms}`;
                            input.value = item.terms;
                            create.click();
                            searchResults.classList.remove('search__list--block');
                        });

                        searchResults.appendChild(li);
                    });
                });
        }

    } else if (this.value && this.value.match('miinto.')) {
        countries.classList.add('disabled')
        searchResults.classList.remove('search__list--block')

    } else {
        link = defaultLink;
        searchResults.classList.remove('search__list--block')
    }

    if (e.keyCode === 13) {
        event.preventDefault();
        create.click();
    }
});

// Select country
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

// Send request
create.onclick = () => {
    const request = link.replace(/ /g, '+');
    let imgArray = [];
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    toggleSpinner();

    fetch(proxyurl + request, fetchParams)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            result.products.list.forEach((item, index) => {
                fetch(proxyurl + item.photo_url)
                    .then(response => response.arrayBuffer())
                    .then(img => imgArray[index] = new Uint8Array(img));
            });

        })
        .then(() => {
            fetch(proxyurl + request, fetchParams)
                .then(response => response.json())
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
}

onmessage = (event) => {
    if (event.data.pluginMessage === 'toggleSpinner') toggleSpinner()
}