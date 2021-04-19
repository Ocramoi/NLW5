import express, { request } from "express";

const PORT = 3333;

const app = express();

function initServer() {
    console.log(`Servidor rodando na porta ${PORT}`)
}

app.get("/", (request, response) => {
    return response.send("Hello, world!");
});

app.post("/users", (request, response) => {
    return response.send("Post, world!");
});

app.listen(PORT, initServer);

// missaoespacial
