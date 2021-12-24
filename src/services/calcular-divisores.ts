export class CalcularDivisores {
  executar(num: any): any {
    if (!num) return new Error("Valor não informado");

    if (isNaN(num)) return new Error("Valor informado não é um Número");

    const divisores = [1];

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        divisores.push(i);
      }
    }

    return divisores;
  }
}
