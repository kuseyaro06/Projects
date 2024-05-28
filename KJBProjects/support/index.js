import express from 'express';
import bodyParser from "body-parser";
import axios from "axios";
import { readFile } from 'node:fs';


const app = express();
const port = 3000
// const jData = readFile('main-info.json', (err, data) => {
//     if (err) throw err;
// });

const jsonData = JSON.parse(jData);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { data: jsonData });
});

app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}`);
})