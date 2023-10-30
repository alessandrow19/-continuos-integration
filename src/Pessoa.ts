export class Pessoa {
    constructor(public nome: string, public idade: number) {}
  
    getIdade(): number {
      return this.idade;
    }
  
    getNome(): string {
      return this.nome;
    }
  }