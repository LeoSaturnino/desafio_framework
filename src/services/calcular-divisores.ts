export class CalcularDivisores {
  executar(num: any): number[] {
    if (num == 0)
      throw new Error(
        "O zero(0) é divisível por todos os números, menos por ele mesmo"
      );

    if (!num) throw new Error("Valor não informado");

    if (isNaN(num)) throw new Error("Valor informado não é um Número");

    if (Math.sign(num) === -1) num = Math.abs(num);

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
