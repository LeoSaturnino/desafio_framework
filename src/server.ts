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
    console.log();
    
    console.log("Números de Entrada: ");

    console.log(valor);

    console.log();

    const calc = new CalcularDivisores();
    const divisores = calc.executar(valor);

    console.log("Números Divisores: ");

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

      console.log("Números Divisores Primo: ");

      console.log(divisoresPrimo);

      console.log();
    }
  } catch (err) {
    console.error(err);
  }
};

executar();
