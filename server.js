const express = require("express");

const app = express();

const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
    res.send("you application is routing at proper end point");
});

app.get("/home", (req, res) => {
    res.send("you are switched to  home page");
});

app.listen(PORT, () => {
    console.log(`app is listning on http://localhost:${PORT}}`);
});