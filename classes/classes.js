"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        (this.dia = dia), (this.mes = mes), (this.ano = ano);
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario.mes);
console.log(aniversario.ano);
console.log(aniversario);
const casamento = new Data(); // posso omitir os parenteses
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new Data(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto.mes);
console.log(aniversarioEsperto.ano);
console.log(aniversarioEsperto);
const casamentoEsperto = new Data(); // posso omitir os parenteses
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio CLasse Produto
// Atributos: nome,preco e desconto
// Criar o construtor
// obs 1.: Desconto é opcional (valor padrão 0)
// obs 2.: Criar doi produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco}  (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto("Caneta Bic Preta", 4, 20);
prod1.desconto = 0.06;
console.log(prod1.resumo());
const prod2 = new Produto("Caderno Escola", 18.8, 0.15);
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "KA", 185);
Array(50)
    .fill(0)
    .forEach(() => {
    carro1.acelerar();
});
console.log(carro1.acelerar());
Array(40)
    .fill(0)
    .forEach(() => {
    carro1.frear();
});
console.log(carro1.frear());
// simular "erros"
// carro1.velocidadeAtual = 300;
// console.log("atual -> " + carro1.velocidadeAtual);
// carro1.velocidadeMaxima = 500;
// console.log("Máxima -> " + carro1.velocidadeMaxima);
// carro1.alterarVelocidade(150);
// console.log("atual -> " + carro1.velocidadeAtual);
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima); // super é chamado quando quer usar o construtor da class pai
        // ...
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(`${f40.acelerar()}`);
console.log(`${f40.frear()}`);
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));
// console.log(new Matematica.areaCirc(4));
console.log(Matematica.areaCirc(4));
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
// const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHelice);
//# sourceMappingURL=classes.js.map