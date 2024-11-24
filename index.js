const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com"
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com"
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana.prince@example.com"
    },
    {
        id: 5,
        name: "Ethan Hunt",
        email: "ethan.hunt@example.com"
    }
];


app.get('/', (req, res) => {
    res.send('Hello World!');

})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})