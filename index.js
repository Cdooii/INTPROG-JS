const express = require('express');
const app = express()
const port = 3001;

const items = ['Bristol', 'Honda', 'Yamaha']
app.get('/items', (req, res) => {
    res.json(items);
});

//STATIC FILE FROM PUBLIC FOLDER
app.use(express.static('public'));

//ROUTE TO HOME PAGE
app.get('/', (req, res) => {
    res.send('Hello World');
});

//START SERVER
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

app.use(express.json()); //Middleware to parse JSON bodies

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

//MIDDLEWARE
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
});

app.use((err, req, res, next) => {
    console.error(err,stack);
    res.status(500).send('HHAHAHAHAHAH');   
});

//POST NEW ITEM
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});




