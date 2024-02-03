const express = require("express");

const PORT = 3003;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Done✨");
});

app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});