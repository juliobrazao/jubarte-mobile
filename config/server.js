const express = require('express')
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('assets'))

module.exports = {
    server
}