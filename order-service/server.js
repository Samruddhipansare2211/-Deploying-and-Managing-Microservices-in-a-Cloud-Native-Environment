const express = require('express');
const fs = require('fs');

const app = express();

app.get('/write', (req, res) => {

    fs.writeFileSync('/data/order.txt', 'Order Saved');

    res.send('Data Written');
});

app.get('/read', (req, res) => {

    if(fs.existsSync('/data/order.txt')) {

        const data = fs.readFileSync('/data/order.txt', 'utf8');

        res.send(data);

    } else {

        res.send('No Data');
    }
});

app.listen(3003, () => {
    console.log('Order Service Started');
});