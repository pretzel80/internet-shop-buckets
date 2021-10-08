const express = require('express')
const path = require("path");
const {response} = require("express");

const port = process.env.PORT || 8000

const app = express()

const buckets = [
    {"id": 1, "name": "Plastic circle bucket 10L Black", "src": "/img/1.jpg", "article": "pl-10-c-blk", "price": 150},
    {"id": 2, "name": "Plastic circle bucket 15L Blue", "src": "/img/2.jpg", "article": "pl-15-c-bl", "price": 200},
    {"id": 3, "name": "Plastic circle bucket 10L Green", "src": "/img/3.jpg", "article": "pl-10-c-grn", "price": 160},
    {"id": 4, "name": "Plastic square bucket 8L Grey", "src": "/img/4.jpg", "article": "pl-8-sq-gr", "price": 180},
    {"id": 5, "name": "Plastic circle bucket 20L Olive", "src": "/img/5.jpg", "article": "pl-20-c-olv", "price": 300},
    {"id": 6, "name": "Plastic circle bucket 6L Orange", "src": "/img/6.jpg", "article": "pl-06-c-or", "price": 100},
    {"id": 7, "name": "Plastic circle bucket 8L pink", "src": "/img/7.jpg", "article": "pl-08-c-pnk", "price": 110},
    {"id": 8, "name": "Plastic circle bucket 15L Purple", "src": "/img/8.jpg", "article": "pl-15-c-prp", "price": 200},
    {"id": 9, "name": "Plastic oval bucket 20L Red", "src": "/img/9.jpg", "article": "pl-20-ovl-rd", "price": 350},
    {"id": 10, "name": "Metallic oval bucket 7L Silver", "src": "/img/10.jpg", "article": "mt-07-c-slv", "price": 400},
    {"id": 11, "name": "Plastic circle bucket 12L White", "src": "/img/11.jpg", "article": "pl-12-c-w", "price": 170},
    {"id": 12, "name": "Plastic circle bucket 15L Yellow", "src": "/img/12.jpg", "article": "pl-15-c-ylw", "price": 190}
]

app.use(express.static(__dirname + "/public"))

app.get('/api/shop', (req, res) => {
    res.send(buckets)
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})