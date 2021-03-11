require('dotenv').config()

console.log('web 39 rulez big time!')

const express = require('express');

const cors = require('cors');

const server = express()

server.use(express.json());

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {// on Heroku machine, an env variable is called "NODE_ENV" -> "production"
    const cors = require('cors')
    server.use(cors())
}

server.use('*', (req, res) => {
    res.send('<h1>success</h1>')
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})