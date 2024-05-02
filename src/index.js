const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {corsOptionsDelegate} = require("./cors-config");

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('A cors demo server')
})

app.get('/api/todos', (req, res) => {
    const todos = [
        {id: 1, text: 'Build git in Golang'},
        {id: 2, text: 'Build a Kubernetes monitoring & Admin tool over weekend'}
    ];

    res.json(todos)
})

app.get('/api/bikes', cors(corsOptionsDelegate), (req, res) => {
    const bikes = [
        {id: 1, text: 'Hero splendor'},
        {id: 2, text: 'BMW G310 RR'},
        {id: 3, text: 'Honda Activa'},
        {id: 4, text: 'KTM 390 Adv X'},
    ];

    res.json(bikes)
})

app.listen(port, () => {
    console.log(`A cors demo server is listening on port ${port}`)
})