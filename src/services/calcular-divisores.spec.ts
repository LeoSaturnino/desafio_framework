import { CalcularDivisores } from "./calcular-divisores";

describe("Calcular Divisores Teste", () => {
  test("Testa se o valor não foi informado", () => {
    const valor = null;
    const calc = new CalcularDivisores();
    try {
      calc.executar(valor);
    } catch (err) {
      expect(err).toEqual(new Error("Valor não informado"));
    }
  });

  test("Testa se o valor informado não é um número", () => {
    const valor = "a";
    const calc = new CalcularDivisores();
    try {
      calc.executar(valor);
    } catch (err) {
      expect(err).toEqual(new Error("Valor informado não é um Número"));
    }
  });

  test("Testa se o retorno da função de calcular divisores é um array de números", () => {
    const valor = 10;
    const calc = new CalcularDivisores();
    const resposta = calc.executar(valor);

    expect(resposta).toBeInstanceOf(Array);
  });

  test("Testa se o retorno da função de calcular divisores está correto", () => {
    const valor = 10;
    const calc = new CalcularDivisores();
    const resposta = calc.executar(valor);

    expect(resposta).toEqual([1, 2, 5, 10]);
  });
  
  test("Testa se o retorno da função de calcular divisores passando o número 0", () => {
    const valor = 0;
    const calc = new CalcularDivisores();
    try {
      calc.executar(valor);
    } catch (err) {
      expect(err).toEqual(new Error("O zero(0) é divisível por todos os números, menos por ele mesmo"));
    }
  });
  
  test("Testa se o retorno da função de calcular divisores passando um número negativo", () => {
    const valor = -5;
    const calc = new CalcularDivisores();
    const resposta = calc.executar(valor);

    expect(resposta).toEqual([1, 5]);
  });
});
