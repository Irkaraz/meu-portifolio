let rlSync = require('readline-sync')

let nome = rlSync.question("Qual o seu nome?\n")

let sobrenome = rlSync.question("Qual o seu sobrenome?\n")

let nomeCompleto = nome + " " + sobrenome

console.log("Olá, " + nomeCompleto)