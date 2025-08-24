import { readFile, writeFile } from "fs/promises";
import * as path from "path";

type produto = {
  type: string;
  image: string;
  name: string;
  color: string;
  sex: string;
};

export const manipulacaoJSON = async () => {
  let list: produto[] = [];

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
