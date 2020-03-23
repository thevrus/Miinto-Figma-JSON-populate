const textbox = document.getElementById('product-link') as HTMLInputElement;
const product = document.getElementById('product') as HTMLButtonElement;
const properties = document.querySelector('.properties') as HTMLElement;
const propertiesPhotos = document.querySelector('.properties__photos') as HTMLElement;
const cors = 'https://figma-proxy-server.herokuapp.com/';

textbox.addEventListener('keyup', function(e) {
    e.keyCode === 13 && product.click();

    this.value.match('miinto.') ? (product.disabled = false) : (product.disabled = true);
});

textbox.addEventListener('search', function() {
    this.value.match('miinto.') ? (product.disabled = false) : (product.disabled = true);
});

product.onclick = () => {
    const link = textbox.value;
    const reqlink = cors + link;

    const imagesList = document.querySelector('.properties__photos');
    const propertiesList = document.querySelector('.properties__list');

    fetch(reqlink)
        .then(res => res.text())
        .then(textHtml => {
            let html = document.createElement('html');
            html.innerHTML = textHtml;

            function $(selector) {
                let element = html.querySelectorAll(selector);

                if (element.length === 1) {
                    return html.querySelector(selector);
                } else if (element.length > 1) {
                    return element;
                } else {
                    return null;
                }
            }

            if ($('.p-product-page__product-name') !== null) {
                imagesList.innerHTML = '';
                propertiesList.innerHTML = '';

                function appendItem(item, description) {
                    const p = document.createElement('p');
                    p.innerHTML = `${description ? description : ''}:
                    <span>${item.innerText.trim()}</span>`;
                    propertiesList.appendChild(p);
                }

                function appendValue(item, description) {
                    const p = document.createElement('p');
                    p.innerHTML = `${description ? description : ''}: <span>${
                        item.value
                    }</span>`;
                    propertiesList.appendChild(p);
                }

                function appendImage(item) {
                    const img = document.createElement('img');
                    img.src = item;

                    imagesList.appendChild(img);

                    img.addEventListener('click', function() {
                        fetch(cors + item)
                            .then(response => response.arrayBuffer())
                            .then(result => {
                                parent.postMessage(
                                    {
                                        pluginMessage: {
                                            type: 'replace-img',
                                            value: new Uint8Array(result)
                                        }
                                    },
                                    '*'
                                );
                            });
                    });
                }

                const selectors = [
                    {
                        selector: '.p-product-page__product-brand',
                        label: 'Brand'
                    },
                    {
                        selector: '.p-product-page__product-name',
                        label: 'Name'
                    },
                    {
                        selector: '.js-product-price',
                        label: 'Price'
                    },
                    {
                        selector: '.js-product-price-before',
                        label: 'Price before'
                    },
                    {
                        selector: '.js-product-discount-value',
                        label: 'Discount'
                    },
                    {
                        selector: 'input[name="productId"]',
                        label: 'Product ID',
                        value: true
                    },
                    {
                        selector: 'input[name="amount"]',
                        label: 'Amount',
                        value: true
                    },
                    {
                        selector: 'input[name="color"]',
                        label: 'Color',
                        value: true
                    },
                    {
                        selector: '.p-product-page__product-description-counter',
                        label: 'Description'
                    }
                ];

                selectors.forEach(item => {
                    const tag = $(item.selector);
                    const label = item.label;

                    item.hasOwnProperty('value')
                        ? appendValue(tag, label)
                        : appendItem(tag, item.label);
                });

                const sizes = $('.c-product-select__size');
                const images = $('.js-main-image-slide');

                if (images.length) {
                    for (let i = 0; i < images.length; i++) {
                        let data = images[i].getAttribute('data-lazy');

                        data = data.slice(0, data.indexOf('?'));
                        appendImage(data);
                    }
                } else {
                    appendImage(images);
                }

                if (sizes.length) {
                    for (let i = 0; i < sizes.length; i++) {
                        appendItem(sizes[i], 'Size');
                    }
                } else {
                    appendItem(sizes, 'Size');
                }

                properties.querySelectorAll('p').forEach(item => {
                    item.addEventListener('click', () => {
                        parent.postMessage(
                            {
                                pluginMessage: {
                                    type: 'replace-text',
                                    value: item.querySelector('span').innerText
                                }
                            },
                            '*'
                        );
                    });
                });
            } else {
                parent.postMessage(
                    {
                        pluginMessage: {
                            type: 'notify',
                            value: 'Try another link 🤓'
                        }
                    },
                    '*'
                );
            }
        });
};
