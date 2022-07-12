import { Voto } from "./votos";
import { BubbleSort } from "./bubbleSort";
import { Fatorial } from "./fatorial";
import { Multiplo } from "./multiplo";
const prompt = require("prompt-sync")({ sigint: true });

const voto = new Voto();

const bubbleSort = new BubbleSort([5, 3, 2, 4, 7, 1, 0, 6]);
const fatorial = new Fatorial();

console.log("");
console.log("======= Exercicio Votos ===========");
voto.percentualDeVotosValido();
voto.percentualDeVotosBranco();
voto.percentualDeVotosNulo();

console.log("");
console.log("======= Exercicio bubbleSort ===========");
bubbleSort.bubbleSort();

console.log("");
console.log("======= Exercicio Fatorial ===========");

const fatorialNumber = prompt("escolha um numero pra fatorar?");

console.log(fatorial.calcularFatorial(Number(fatorialNumber)));

console.log("");
console.log("======= Exercicio Multiplos 3 e 5 ===========");
const multiploNumber = prompt("escolha um numero pra saber multiplo de 3 e 5?");
const multiplier = new Multiplo(Number(multiploNumber));
console.log(multiplier.calcularMultiplos());
