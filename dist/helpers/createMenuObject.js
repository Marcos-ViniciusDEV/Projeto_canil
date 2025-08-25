"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (active) => {
    let returnObjetct = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };
    if (active !== "") {
        returnObjetct[active] = true;
    }
    return returnObjetct;
};
exports.createMenuObject = createMenuObject;
exports.default = exports.createMenuObject;
