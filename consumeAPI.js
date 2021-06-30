const fetch = require('node-fetch');

async function handleRequest(method = '', url = '', data = {}) {
    
    const response = await fetch(url, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}


const get = (method, url, data) => {
    return handleRequest(method, url, data);
};

const create = (method, url, data) => {
    return handleRequest(method, url, data);
};

const update = (method, url, data) => {
    return handleRequest(method, url, data);
};

const remove = (method, url, data) => {
    return handleRequest(method, url, data);
};

create('POST', 'http://localhost:8080/employees/', { name: "Samwise Gamgee", role: "gardener" })
    .then(data => {
        console.log(data);
    });