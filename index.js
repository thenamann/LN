const express = require('express');
const app = express();

const PORT = 3000;

const userRoute = require('./routes/users');
app.use('/api/users', userRoute);

const productsRoute = require('./routes/products');
app.use('/products', productsRoute);



app.get('/', (req, res) => {
    res.send("hii from express");
});

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
});

app.get('/users', (req, res) =>{
    res.send("users list");
});

app.get('/products', (req,res) => {
    res.send("products list");
});


