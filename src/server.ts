import express from "express";
import helmet from "helmet";
import router from "./routers/index";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log("Servidor rodando: http:/localhost:3000");
});
