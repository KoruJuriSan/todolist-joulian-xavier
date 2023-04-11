import express from "express"
import { readFile, writeFile } from "fs" 
import bodyParser from "body-parser"

const app = express()
const port = 1234

app.use(express.static("./dist"))

app.use("/jsp", bodyParser.json())

app.get((req, res) => {
    res.status(200).end()
})

app.get("/get-data", (req, res) => {
    readFile("./database/data.json", (err, data) => {
        if (err) throw err
        res.json(JSON.parse(data))
    })
})

app.post("/jsp", (req, res) => {
    let newData = JSON.stringify(req.body)
    writeFile("./database/data.json", newData, (err) => {
        if (err) throw err
        console.log(newData)
    })
    res.status(200)
})

app.listen(port, (req, res) => {
    console.log(`Serveur lancé sur le port : http://localhost:${port}`)
})