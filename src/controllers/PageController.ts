import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
// import { manipulacaoJSON } from "../services/canil";
import { Pet } from "../models/pets";

export const home = async (req: Request, res: Response) => {
  const myList = await Pet.getAll();
  // console.log(myList);
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      backgroud: "allanimals.jpg",
    },
    myList,
  });
};
export const dogs = async (req: Request, res: Response) => {
  const myList = await Pet.getFromType("dog");

  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Todos os cachorros",
      backgroud: "banner_dog.jpg",
    },
    myList,
  });
};
export const cats = async (req: Request, res: Response) => {
  const myList = await Pet.getFromType("cat");
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Todos os gatos",
      backgroud: "banner_cat.jpg",
    },
    myList,
  });
};
export const fishes = async (req: Request, res: Response) => {
  const myList = await Pet.getFromType("fish");

  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Todos os peixes",
      backgroud: "banner_fish.jpg",
    },
    myList,
  });
};
