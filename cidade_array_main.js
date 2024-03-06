const readlineSync = require('readline-sync')
const Cidade = require("./cidade_classe")

console.log("======================================================")
console.log("================================ Dados da Cidade ========================")
console.log("======================================================")

let nome = readlineSync.question("Digite o nome da cidade: ")
let estado = readlineSync.question("Digite o nome do estado: ")
let numPopulacao = readlineSync.question("Digite o numero de habitantes: ")
let numHomens = readlineSync.question("Digite o numero de homens: ")
let numMulheres = readlineSync.question("Digite o numero de mulheres: ")

const cidade1 = new Cidade(nome, estado, numPopulacao, numHomens, numMulheres)

let homemPercentual = cidade1.percentualHomens()
let mulherPercentual = cidade1.percentualMulher()

console.log("======================================================")
console.log(" Resultado sobre dados da cidade")
console.log("======================================================")
console.log(`O percentual de mulheres é ${mulherPercentual} de &{numPopulacao}`)
console.log(`O percentual de homens é ${homemPercentual} de &{numPopulacao}`)
console.log("======================================================")

