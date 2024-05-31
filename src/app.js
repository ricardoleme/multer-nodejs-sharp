import path from "path";
import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const dirname = new URL('.', import.meta.url).pathname;


// Rotas do conteúdo público 
app.use('/', express.static('public'))

app.use(routes);

export default app;
