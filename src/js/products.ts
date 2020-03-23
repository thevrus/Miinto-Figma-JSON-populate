const input = document.getElementById('search-products') as HTMLInputElement;
const countries = document.querySelector('.list.list--countries') as HTMLElement;
const categories = document.querySelector('.list.list--categories') as HTMLElement;
const create = document.getElementById('get-products') as HTMLInputElement;
const searchResults = document.querySelector('.search__list') as HTMLElement;

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let proxyurl = 'https://figma-proxy-server.herokuapp.com/';
let country = 'pl';
let category = 'new-k';
let search = '';

// Display notification on button
function notifyButton(text) {
    create.innerText = text;
    setTimeout(() => {
        create.innerText = 'Populate';
    }, 700);
}

// Toggle spinner
function toggleSpinner() {
    const main = document.querySelector('.main');
    const tabs = document.querySelector('.tabs');
    if (!create.disabled) {
        create.disabled = true;
        create.innerHTML = `<span class='loading-spinner'></span>`;
        main.classList.add('disabled--wawing');
        tabs.classList.add('disabled--wawing');
    } else {
        create.disabled = false;
        create.innerText = 'Populate';
        main.classList.remove('disabled--wawing');
        tabs.classList.remove('disabled--wawing');
    }
}

// Check server time responses
(function() {
    let isReceived = false;

    fetch(proxyurl)
        .then(({ status }) => {
            status === 200 ? (isReceived = true) : (proxyurl = corsAnywhere);
        })
        .catch(() => (proxyurl = corsAnywhere));

    setTimeout(() => {
        if (!isReceived) {
            proxyurl = corsAnywhere;
        }
    }, 1500);

    setTimeout(() => {
        if (!isReceived) {
            proxyurl = 'https://figma-proxy-server.herokuapp.com/';
        }
    }, 10000);
})();

// Rename layer
(function() {
    document.querySelector('.list.list--tags').addEventListener('click', (e: any) => {
        if (e.target.classList.contains('list__list-item')) {
            const text = e.target.innerText;

            parent.postMessage(
                {
                    pluginMessage: {
                        type: 'rename-layer',
                        value: text
                    }
                },
                '*'
            );
        }
    });
})();

// Countries toggler
(function() {
    input.addEventListener('keyup', (e: any) => {
        if (e.target.value.length !== 0) {
            countries.classList.add('disabled');
        } else {
            countries.classList.remove('disabled');
        }
    });
})();

// Clean search field
input.addEventListener('search', () => {
    searchResults.classList.remove('search__list--block');
    countries.classList.remove('disabled');
    categories.classList.remove('disabled');
});

// Input
input.addEventListener('keyup', function(e) {
    if (this.value && !this.value.match('miinto.')) {
        search = `search?q=${this.value}`;
        let searchQuery = `https://www.miinto.${country}/actions/_get_search_suggestions.php?q=${input.value}`;

        countries.classList.remove('disabled');
        categories.classList.add('disabled');

        if (this.value.length > 2) {
            searchResults.classList.add('search__list--block');

            fetch(proxyurl + searchQuery)
                .then(result => result.json())
                .then(result => {
                    searchResults.innerHTML = '';

                    result.forEach(({ terms, type }) => {
                        const li = document.createElement('li');
                        const span = document.createElement('span');

                        li.className = 'search__list-item';
                        li.innerText = terms;

                        span.className = 'search__list-span';
                        span.innerText = type;

                        li.appendChild(span);

                        li.addEventListener('click', () => {
                            input.value = terms;
                            searchResults.classList.remove('search__list--block');
                        });

                        searchResults.appendChild(li);
                    });
                });
        }
    } else if (this.value && this.value.match('miinto.')) {
        countries.classList.add('disabled');
        searchResults.classList.remove('search__list--block');
    } else {
        searchResults.classList.remove('search__list--block');
        categories.classList.remove('disabled');
    }

    if (e.keyCode === 13) {
        searchResults.classList.remove('search__list--block');
        create.click();
    }
});

// Select country
countries.addEventListener('click', function() {
    this.querySelectorAll('.list__list-item').forEach(item => {
        const input = item.querySelector('input');

        if (input.checked) {
            item.classList.add('list__list-item--checked');
            country = input.value;

            notifyButton(`miinto.${input.value} – Selected`);
        } else {
            item.classList.remove('list__list-item--checked');
        }
    });
});

// Select category
categories.addEventListener('click', function() {
    this.querySelectorAll('.list__list-item').forEach(item => {
        const input = item.querySelector('input');

        if (input.checked) {
            item.classList.add('list__list-item--checked');
            category = input.value;
        } else {
            item.classList.remove('list__list-item--checked');
        }
    });
});

function populateItems() {
    const request =
        search.length > 0
            ? `https://www.miinto.${country}/${search}`
            : `https://www.miinto.${country}/${category}`;

    const fetchParams = {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            Accept: '*/*'
        }
    };

    let imgArray = [];

    toggleSpinner();
    searchResults.classList.remove('search__list--block');

    fetch(proxyurl + request, fetchParams)
        .then(response => {
            return response.json();
        })
        .then(result => {
            result.products.list.forEach((item, index) => {
                fetch(proxyurl + item.photo_url)
                    .then(response => response.arrayBuffer())
                    .then(img => (imgArray[index] = new Uint8Array(img)));
            });
        })
        .then(() => {
            fetch(proxyurl + request, fetchParams)
                .then(response => response.json())
                .then(response => {
                    parent.postMessage(
                        {
                            pluginMessage: {
                                type: 'populate',
                                images: imgArray,
                                response
                            }
                        },
                        '*'
                    );
                });
        });
}

create.onclick = () => {
    parent.postMessage(
        {
            pluginMessage: {
                type: 'check-selection'
            }
        },
        '*'
    );
};

onmessage = event => {
    switch (event.data.pluginMessage) {
        case 'toggleSpinner':
            toggleSpinner();
            break;

        case 'populate':
            populateItems();
            break;
    }
};
