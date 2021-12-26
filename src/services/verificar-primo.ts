export class VerificarPrimo {
  executar(num: any): any {
    if (!num) return new Error("Valor não Informado");

    if (isNaN(num)) return new Error("Valor informado não é um Número");

    if (num % 2 === 0) {
      return true;
    }

    return false;
  }
}
