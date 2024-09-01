const express = require("express");
const app = express();
const path = require("path");

// Set view engine and paths
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

// Utility function to capitalize the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Crop advice route
app.get("/crop/:crops", (req, res) => {
    const { crops } = req.params;
    const capitalizedCrops = capitalizeFirstLetter(crops);

    console.log(`Request for crop: ${crops}`);
    console.log(`Attempting to render: ${capitalizedCrops}`);

    switch(capitalizedCrops) {
        case "Sugarcane":
            res.render("Sugarcane");
            console.log("Rendered Sugarcane");
            break;
        case "Apple":
            res.render("apples");
            console.log("Rendered Apple");
            break;
        case "Banana":
            res.render("banana");
            console.log("Rendered Banana");
            break;
        case "Cabbage":
            res.render("cabbage");
            console.log("Rendered Cabbage");
            break;
        case "Garlic":
            res.render("Lahsun");
            console.log("Rendered Garlic");
            break;
        case "Onion":
            res.render("onion");
            console.log("Rendered Onion");
            break;
        case "Papaya":
            res.render("Papaya");
            console.log("Rendered Papaya");
            break;
        case "Wheat":
            res.render("Wheat");
            console.log("Rendered Wheat");
            break;
        case "Carrot":
            res.render("Carrot");
            console.log("Rendered Carrot");
            break;
        default:
            res.status(404).send('Page not found');
            console.log("Page not found");
    }
});

app.listen(8000,() => {
    console.log("Port is listening on 8000");
})