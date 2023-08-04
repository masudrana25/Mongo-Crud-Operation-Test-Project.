const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Product = require('./models/schema');

const connectDB = require('./models/database');
connectDB();

const ProductRouter = require('./routes/products.routes');

app.listen(3300, () => {
  console.log('Your Server is running in 3300 port.');
});

// home page
app.get('/', (req, res) => {
  res.send('<h1>This is Home Page</h1>')
});

// Product page
app.get('/product', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Product page "create" post request handle
app.use(ProductRouter);


