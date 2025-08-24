import { readFile, writeFile } from "fs/promises";
import * as path from "path";

type pet = {
  type: "dog" | "cat" | "fish";
  image: string;
  name: string;
  color: string;
  sex: "Musculino" | "Feminino";
};

export const manipulacaoJSON = async () => {
  let list: pet[] = [];

  try {
    const DataFile = path.resolve(__dirname, "../../data/list.json");
    const read = await readFile(DataFile, { encoding: "utf-8" });

    list = await JSON.parse(read);
    // console.log(list);
  } catch (err) {
    console.error("❌ Erro ao manipular o arquivo:", err);
  }

  return list;
};

export default manipulacaoJSON;
