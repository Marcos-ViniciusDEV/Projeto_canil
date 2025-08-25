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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const canil_1 = __importDefault(require("../services/canil"));
exports.Pet = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const Mylist = yield (0, canil_1.default)();
        return Mylist;
    }),
    getFromType: (type) => __awaiter(void 0, void 0, void 0, function* () {
        const Mylist = yield (0, canil_1.default)();
        return Mylist.filter((pet) => pet.type === type);
    }),
    getFromName: (name) => __awaiter(void 0, void 0, void 0, function* () {
        const Mylist = yield (0, canil_1.default)();
        return Mylist.filter((i) => i.name.toLowerCase().includes(name.toLowerCase()));
    }),
};
