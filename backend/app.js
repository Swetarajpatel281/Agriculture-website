const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());


//crop advice
app.get("/crop/:crops", (req,res) => {
    let{crops} = req.params;
    if(crops === "Apple") {
        res.render("apples.ejs");
        console.log("Success");
    }
    if(crops === "Banana" ) {
        res.render("banana.ejs");
        console.log("Success2");
    }
})

app.listen(8000,() => {
    console.log("Port is listening on 8000");
})