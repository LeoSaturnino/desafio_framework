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
});
