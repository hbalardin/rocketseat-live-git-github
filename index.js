const express = require('express');

const app = express();

app.get('/teste3', (request, response) => {
    return response.json({ Hello: 'World 3!'});
});

app.listen(3333);