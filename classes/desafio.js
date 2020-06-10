"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome = "") {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("Toooooooooot!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
let retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario1 = new Estagiario();
estagiario1.primeiroNome = "Vitor";
console.log(estagiario1.primeiroNome);
estagiario1.primeiroNome = "Lourenço";
console.log(estagiario1.primeiroNome);
//# sourceMappingURL=desafio.js.map