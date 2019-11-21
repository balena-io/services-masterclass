const express = require('express');
const app = express();

app.get('/data', (_req, res) => {
    res.send(`${new Date().toISOString()}\n`);
});

app.listen(1234, () => {
    console.log('Started backend');
});
