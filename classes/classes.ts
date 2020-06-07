class Data {
  // Público por padrão
  dia: number;
  public mes: number;
  ano: number; // por default é public

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
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
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
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
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    return `${this.nome} custa R$${this.preco}  (${this.desconto * 100}% off)`;
  }
}

const prod1 = new Produto("Caneta Bic Preta", 4, 20);
prod1.desconto = 0.06;
console.log(prod1.resumo());

const prod2 = new Produto("Caderno Escola", 18.8, 0.15);
console.log(prod2.resumo());
