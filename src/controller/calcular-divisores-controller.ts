import { HttpRequest, HttpResponse } from "../helpers/protocolos";
import { badRequest, ok } from "../helpers/http-helpers";
import { VerificarPrimo } from "../services/verificar-primo";
import { CalcularDivisores } from "../services/calcular-divisores";

export interface RespostaDvivisores {
  numEntradas: number;
  divisores: number[];
  divisoresPrimos: number[];
}

export class CalcularDivisoresController {
  executar(req: HttpRequest): HttpResponse {
    try {
      const valor = req.params.num;

      const calc = new CalcularDivisores();
      const respCalcDivisores = calc.executar(valor);
      const divisores = respCalcDivisores;

      const verif = new VerificarPrimo();
      const divisoresPrimo: number[] = [];

      for (let i = 0; i < divisores.length; i++) {
        const respVerifPrimo = verif.executar(divisores[i]);
        const numPrimo = respVerifPrimo;
        if (numPrimo) {
          divisoresPrimo.push(divisores[i]);
        }
      }

      const respostaDivisores: RespostaDvivisores = {
        numEntradas: valor,
        divisores: divisores,
        divisoresPrimos: divisoresPrimo,
      };

      return ok(respostaDivisores);
    } catch (err) {
      console.error(err);
      return badRequest(err);
    }
  }
}
