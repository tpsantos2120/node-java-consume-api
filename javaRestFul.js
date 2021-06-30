const fetch = require('node-fetch');

// Example POST method implementation:
async function postData(method = '', url = '', data = {}) {
    // Default options are marked with *
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
  
  postData('POST', 'http://localhost:8080/employees/', {name: "Samwise Gamgee", role: "gardener"})
    .then(data => {
      console.log(data);
    });