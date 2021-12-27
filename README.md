# desafio_framework

Projeto de uma API que recebe um número e retorna um array dos seus divisores e um array dos seus divisores primos

## Tecnologias
NodeJS com express </br>
Typescript</br>
TDD com Jest</br>


## Execução

- script: npm run dev

- chamada api: /calc/{numero}

## Exemplo

- chamada: /calc/10

- resposta: 
{
statusCode: 200,
body:{
  numEntrada: 10,
  divisores: [1,2,5,10]
  divisoresPrimos: [1,2,5]
}
