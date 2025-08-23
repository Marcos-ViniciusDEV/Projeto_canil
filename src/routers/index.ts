import express from "express";
import * as pageController from "../controllers/PageController";
import * as searchController from "../controllers/searchController";
export const router = express.Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", searchController.search);

router.get("/ping", (req, res) => {
  res.json({ ping: true });
});

export default router;
