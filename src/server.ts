import express from "express";
import "./database";
import { routes } from "./routes";

const PORT = 3333,
      app = express();

function initServer() {
    console.log(`Servidor rodando na porta ${PORT}`)
}

app.use(express.json());
app.use(routes);

app.listen(PORT, initServer);
