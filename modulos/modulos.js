"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from "./circuferencia";
const retangulo_1 = __importDefault(require("./retangulo"));
const circuferencia_1 = require("./circuferencia");
console.log("Módulo carregado...");
console.log(retangulo_1.default(7, 8));
console.log(circuferencia_1.areaCircunferencia(2));
const { digaOi } = require("./novo");
console.log(digaOi("Vitor"));
//# sourceMappingURL=modulos.js.map