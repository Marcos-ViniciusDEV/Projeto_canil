import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      backgroud: "allanimals.jpg",
    },
  });
};
export const dogs = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Todos os cachorros",
      backgroud: "banner_dog.jpg",
    },
  });
};
export const cats = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Todos os gatos",
      backgroud: "banner_cat.jpg",
    },
  });
};
export const fishes = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Todos os peixes",
      backgroud: "banner_fish.jpg",
    },
  });
};
