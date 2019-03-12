const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testingdb"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("/scrape", function(req,res){
    axios.get("https://www.atlantafalcons.com/news/all").then(function(response){
        const $ = cheerio.load(response.data)
        let images = [];
        let titles = [];
        let date = [];
        let summaries = [];
    }