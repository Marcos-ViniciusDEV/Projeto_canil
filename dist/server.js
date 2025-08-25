"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const index_1 = __importDefault(require("./routers/index"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("view engine", "mustache");
app.set("views", path_1.default.join(__dirname, "view"));
app.engine("mustache", (0, mustache_express_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/", index_1.default);
app.use((req, res) => {
  res.status(404).render("pages/404");
});
app.listen(3000, () => {
  console.log("Servidor rodando: http:/localhost:3000", process.env.PORT);
});
