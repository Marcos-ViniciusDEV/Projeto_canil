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
exports.search = void 0;
const pets_1 = require("../models/pets");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myList = yield pets_1.Pet.getFromName(req.query.q);
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)(""),
        query: req.query.q,
        myList,
    });
});
exports.search = search;
exports.default = exports.search;
