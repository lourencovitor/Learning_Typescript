// string
let nome: string = "João";
console.log(nome);
// nome = 28;

// numbers
let idade: number = 18;
// idade = 'Ana'; erro pois ana é uma string
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "27";

// array
let hobbies: any[] = ["cozinhar", "Praticar Esportes"];
console.log(hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);

// Tupla
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua dos bobos", 1260, "Bloco 6"];
console.log(endereco);

// Enums
enum Cor {
  Cinza, //0
  Verde = 100, //100
  Azul = 10, //10
  Laranja,
  Amarelo,
  Vermelho = 100,
}
let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// Any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// Função
function retornaMeuNome(): string {
  //   return minhaIdade;
  return nome;
}
console.log(retornaMeuNome());
function digaOi(): void {
  console.log("Oi");
  //   return minhaIdade;
}
digaOi();
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
// console.log(multiplicar(2, "Bia"));
console.log(multiplicar(4.7, 9));

// Tipo função
let calculo: (x: number, y: number) => number;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let usuario: { nome: string; idade: number } = {
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

// Desafio
/**
 * Criar um objeto funcionário com:
 *  - Array de string com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número)
 *      e retornar uma string
 *      -> Ponto normal (<=8)
 *      -> Fora do horário (> 8)
 */

// Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

const funcionario: Funcionario = {
  supervisores: ["Vitor", "Pedro", "Lucas"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

const funcionario2: Funcionario = {
  supervisores: ["Bia", "Carlos"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
// nota = true;

// checando tipos
let valor = 30;
if (typeof valor === "number") {
  console.log("É um number");
} else {
  console.log(typeof valor);
}

// never
function falha(msg: string): never {
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
let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
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

type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

// Desafio
let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Vitor Silva",
  contaBancaria: contaBancaria,
  contatos: ["34656556", "2666546", "6646545"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
