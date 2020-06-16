const express = require('express');

const app = express();

app.get('/teste', (request, response) => {
    return response.json({ Hello: 'World!'});
});

app.listen(3333);