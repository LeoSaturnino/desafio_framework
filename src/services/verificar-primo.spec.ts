import { VerificarPrimo } from "./verificar-primo";

describe("Verificar Primo Teste", () => {
  test("Testa se o valor não foi informado", () => {
    const valor = null;
    const calc = new VerificarPrimo();
    const resposta = calc.executar(valor);

    expect(resposta).toEqual(new Error("Valor não informado"));
  });

  test("Testa se o valor informado não é um número", () => {
    const valor = "a";
    const calc = new VerificarPrimo();
    const resposta = calc.executar(valor);

    expect(resposta).toEqual(new Error("Valor informado não é um Número"));
  });

  test("Testa se o valor retornado é falso para número não primo", () => {
    const valor = 4;
    const calc = new VerificarPrimo();
    const resposta = calc.executar(valor);

    expect(resposta).toBe(false);
  });

  test("Testa se o valor retornado é verdadeiro para número primo", () => {
    const valor = 3;
    const calc = new VerificarPrimo();
    const resposta = calc.executar(valor);

    expect(resposta).toBe(true);
  });
});
