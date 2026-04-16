const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let favorites = [];

app.get("/favorites", (req, res) => {
    res.json(favorites);
});

app.post("/favorites", (req, res) => {

    const newFavorite = {
        id: Date.now(),
        country: req.body.country
    };

    favorites.push(newFavorite);

    res.status(201).json(newFavorite);
});

app.delete("/favorites/:id", (req, res) => {

    const id = parseInt(req.params.id);

    favorites = favorites.filter(f => f.id !== id);

    res.json({ message: "Destinació eliminada" });
});

app.listen(PORT, () => {
    console.log(`API executant-se a http://localhost:${PORT}`);
});