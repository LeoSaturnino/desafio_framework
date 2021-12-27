export class CalcularDivisores {
  executar(num: any): number[] {
    if (!num) throw new Error("Valor não informado");

    if (isNaN(num)) throw new Error("Valor informado não é um Número");

    const divisores = [1];

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        divisores.push(i);
      }
    }

    divisores.push(Number(num));

    return divisores;
  }
}
