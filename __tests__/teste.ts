// Teste para verificar se a classe `Pessoa` funciona corretamente.
import {Pessoa } from "../src/Pessoa"
describe("Pessoa", () => {
    it("deve criar uma pessoa com nome e idade", () => {
      // Arrange
      const nome = "João";
      const idade = 30;
  
      // Act
      const pessoa = new Pessoa(nome, idade);
  
      // Assert
      expect(pessoa.nome).toBe(nome);
      expect(pessoa.idade).toBe(idade);
    });
  
    it("deve retornar a idade da pessoa", () => {
      // Arrange
      const nome = "Maria";
      const idade = 20;
  
      // Act
      const pessoa = new Pessoa(nome, idade);  
      // Assert
      expect(pessoa.getIdade()).toBe(idade);
    });
  
    it("deve retornar o nome da pessoa", () => {
      // Arrange
      const nome = "José";
      const idade = 10;
  
      // Act
      const pessoa = new Pessoa(nome, idade);
  
      // Assert
      expect(pessoa.getNome()).toBe(nome);
    });
  });
  
  