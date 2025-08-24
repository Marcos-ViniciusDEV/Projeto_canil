import { SrvRecord } from "dns";
import manipulacaoJSON from "../services/canil";

type PetTipe = "dog" | "cat" | "fish";

type pet = {
  type: "dog" | "cat" | "fish";
  image: string;
  name: string;
  color: string;
  sex: "Musculino" | "Feminino";
};

export const Pet = {
  getAll: async (): Promise<pet[]> => {
    const Mylist = await manipulacaoJSON();
    return Mylist;
  },
  getFromType: async (type: PetTipe): Promise<pet[]> => {
    const Mylist = await manipulacaoJSON();
    return Mylist.filter((pet) => pet.type === type);
  },
  getFromName: async (name: string): Promise<pet[]> => {
    const Mylist = await manipulacaoJSON();
    return Mylist.filter((i) => i.name.toLowerCase().includes(name.toLowerCase()));
  },
};
