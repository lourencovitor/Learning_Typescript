"use strict";
// string
let nome = "João";
console.log(nome);
// nome = 28;
// numbers
let idade = 18;
// idade = 'Ana'; erro pois ana é uma string
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "27";
// array
let hobbies = ["cozinhar", "Praticar Esportes"];
console.log(hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// Tupla
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua dos bobos", 1260, "Bloco 6"];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// Função
function retornaMeuNome() {
    //   return minhaIdade;
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
    //   return minhaIdade;
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, "Bia"));
console.log(multiplicar(4.7, 9));
// Tipo função
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: "João",
    idade: 27,
};
console.log(usuario);
// usuario = {}
// usuario = {
//   name: "Maria",
//   age: 31,
// };
usuario = {
    idade: 31,
    nome: "Maria",
};
console.log(usuario);
const funcionario = {
    supervisores: ["Vitor", "Pedro", "Lucas"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
const funcionario2 = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
// nota = true;
// checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "sabão",
    preco: 10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    },
};
produto.validarProduto();
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Fulano 1",
    tel1: "6556561112",
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNullo = null; // any
podeSerNullo = 12;
console.log(podeSerNullo);
podeSerNullo = "abc";
console.log(podeSerNullo);
// Desafio
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Vitor Silva",
    contaBancaria: contaBancaria,
    contatos: ["34656556", "2666546", "6646545"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map