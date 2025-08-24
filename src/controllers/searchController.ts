import { Request, Response } from "express";
import { Pet } from "../models/pets";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = async (req: Request, res: Response) => {
  const myList = await Pet.getFromName(req.query.q as string);
  res.render("pages/page", {
    menu: createMenuObject(""),
    query: req.query.q,

    myList,
  });
};

export default search;
