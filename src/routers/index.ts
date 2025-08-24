import express from "express";
import * as pageController from "../controllers/PageController";
import * as searchController from "../controllers/searchController";
import manipulacaoJSON from "../services/canil";
import { Pet } from "../models/pets";

export const router = express.Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", searchController.search);

router.get("/ping", (req, res) => {
  res.json({ ping: true });
});

router.get("/teste", async (req, res) => {
  try {
    const myList = await manipulacaoJSON();
    res.json(myList);
  } catch (err) {
    res.json({ err: err });
  }
});

const listao = async () => {
  const listaAll = await Pet.getFromName("P");
};

listao();
export default router;
