import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/login", (req, res) => {
    res.json({"message": "<p>Hello from server LAB</p>"});
});

app.listen(port, () => {
    console.log(`[backend/index] server listening on ${port}`);
});