import { CalcularDivisores } from "./services/calcular-divisores";

const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const perguntar = (pergunta) =>
  new Promise((resolve) =>
    leitor.question(pergunta, (resposta) => resolve(resposta))
  );

const executar = async () => {
  try {
    const valor = await perguntar("Informe um número: ");

    const calc = new CalcularDivisores();
    const divisores = calc.executar(valor);

    console.log("Número Divisores: ");

    console.log(divisores);

    console.log();
  } catch (err) {
    console.error(err);
  }
};

executar();
