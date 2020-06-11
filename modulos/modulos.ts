// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from "./circuferencia";
import retangulo from "./retangulo";
import { areaCircunferencia as circ } from "./circuferencia";

console.log("Módulo carregado...");
console.log(retangulo(7, 8));
console.log(circ(2));

const { digaOi } = require("./novo");
console.log(digaOi("Vitor"));
