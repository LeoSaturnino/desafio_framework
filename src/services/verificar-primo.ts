export class VerificarPrimo {
  executar(num: any): boolean {
    if (!num) throw new Error("Valor não informado");

    if (isNaN(num)) throw new Error("Valor informado não é um Número");

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}
