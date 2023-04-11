const express = require("express")
const { readFileSync } = require("fs")
const { writeFile } = require("fs")
let data = require("./database/todo.json")

const app = express()
const homePage = readFileSync("index.html", "utf-8")
const bodyParser = require("body-parser");

const PORT = 8080

app.listen(PORT, (req, res) => {
    console.log(`serveur is lisseuningehhh on http://localhost:8080`)
})

app.use(express.static("./public"))

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.end(homePage)
})

app.get("/getElements", (req, res) => {
    res.json(data)
})

app.post("/addElement", (req, res) => {
    towrite = req.body
    data = towrite
    towrite = JSON.stringify(towrite)
    writeFile("database/todo.json", towrite, (err) => {
        if (err) throw err
        console.log("données synchronisées")
    })
    res.status(200).end("bien reçu !")
})