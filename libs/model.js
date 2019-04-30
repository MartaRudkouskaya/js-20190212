const BASE_URL = 'https://intensive-mail-server.herokuapp.com';

export class Model {
  request (verb, path, body) {
    const headers = {};
    return fetch(`${BASE_URL}/${path}`, {
      method: verb, // GET, PUT, POST
      headers,
      body
    }).then(data => {
      console.log(`get response ${path} ${data.status}`);
      return data.json();
    });
  }
}
