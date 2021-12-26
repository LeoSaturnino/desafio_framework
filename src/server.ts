import { CalcularDivisores } from "./services/calcular-divisores";
import { VerificarPrimo } from "./services/verificar-primo";

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

    const verif = new VerificarPrimo();
    const divisoresPrimo: number[] = [];

    if (Array.isArray(divisores)) {
      for (let i = 0; i < divisores.length; i++) {
        if (verif.executar(divisores[i])) {
          divisoresPrimo.push(divisores[i]);
        }
      }

      console.log("Número Divisores Primo: ");

      console.log(divisoresPrimo);

      console.log();
    }
  } catch (err) {
    console.error(err);
  }
};

executar();
