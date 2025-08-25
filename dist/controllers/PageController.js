"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
// import { manipulacaoJSON } from "../services/canil";
const pets_1 = require("../models/pets");
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myList = yield pets_1.Pet.getAll();
    // console.log(myList);
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("all"),
        banner: {
            title: "Todos os animais",
            backgroud: "allanimals.jpg",
        },
        myList,
    });
});
exports.home = home;
const dogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myList = yield pets_1.Pet.getFromType("dog");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("dog"),
        banner: {
            title: "Todos os cachorros",
            backgroud: "banner_dog.jpg",
        },
        myList,
    });
});
exports.dogs = dogs;
const cats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myList = yield pets_1.Pet.getFromType("cat");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("cat"),
        banner: {
            title: "Todos os gatos",
            backgroud: "banner_cat.jpg",
        },
        myList,
    });
});
exports.cats = cats;
const fishes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myList = yield pets_1.Pet.getFromType("fish");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("fish"),
        banner: {
            title: "Todos os peixes",
            backgroud: "banner_fish.jpg",
        },
        myList,
    });
});
exports.fishes = fishes;
