System.register(["./retangulo", "./circuferencia"], function (exports_1, context_1) {
    "use strict";
    var retangulo_1, circuferencia_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (retangulo_1_1) {
                retangulo_1 = retangulo_1_1;
            },
            function (circuferencia_1_1) {
                circuferencia_1 = circuferencia_1_1;
            }
        ],
        execute: function () {
            console.log(retangulo_1.areaRetangulo(7, 8));
            console.log(circuferencia_1.areaCircunferencia(2));
        }
    };
});
//# sourceMappingURL=modulos.js.map