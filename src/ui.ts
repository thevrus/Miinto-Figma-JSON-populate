import './scss/figma-plugin-ds.scss'

document.getElementById('create').onclick = () => {
    const imgChec = document.getElementById('image');
    const input = document.getElementById('link');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const link = input.value || 'https://www.miinto.pl/guide-k?sort=popular%20desc&page=368';

    const imgArray = [];

    if (imgChec.checked) {
        fetch(proxyurl + link, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }).then((response) => {
            return response.json();
        }).then((resJson) => {
            resJson.products.list.forEach(item => {
                fetch(proxyurl + item.photo_url).then(response => {
                    return response.arrayBuffer()
                }).then(a => {
                    imgArray.push(new Uint8Array(a));
                })
            });
        });
    }

    const request = new XMLHttpRequest();
    request.open('GET', proxyurl + link, true);
    request.responseType = "text";
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
}

document.getElementById('cancel').onclick = () => {
    parent.postMessage({
        pluginMessage: {
            type: 'cancel'
        }
    }, '*')
}