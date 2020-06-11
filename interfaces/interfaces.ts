interface Humano {
  nome: string; // atributo obrigatorio
  idade?: number; // atributo é opcional quando se usa a ?
  [prop: string]: any; // utilizando nomes dinamicos
  saudar(sobrenome: string): void;
  //   teste?(sobrenome: string): void; função opcional
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Skywalker");

// Usando Classes...
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  // Math.pow(3, 10)
  // 3 ** 10
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

// interface herdando de interface usar extends
interface ABC extends A, B {
  c(): void;
}

// classe herdando de interface usar implements
class RealA implements A {
  a(): void {}
}

class RealB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

interface Object {
  log(): void;
}
Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  nome: "Vitor",
  toString() {
    return this.nome;
  },
};

cli.log();
