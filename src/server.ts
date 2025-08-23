import express from "express";
import helmet from "helmet";
import mustache from "mustache-express";
import router from "./routers/index";
import path from "path";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "view"));
app.engine("mustache", mustache());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

app.use((req, res) => {
  res.status(404).send("Pagina nao encontrada");
});

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando: http:/localhost:3000");
});
