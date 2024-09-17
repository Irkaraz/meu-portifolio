
console.log("Escolha sua bebida: café, leite ou chá");

var bebida = "leite";

var valor = 0;

switch (bebida) {
    case "café":
        valor = 3.50;
        break;
    case "leite":
        valor = 2.00;
        break;
    case "chá":
        valor = 2.50;
        break;
    default:
        console.log("Opção inválida! Escolha entre café, leite ou chá.");
        return;
}

console.log(`Você escolheu ${bebida}, o valor a ser pago é R$ ${valor.toFixed(2)}. Tenha um ótimo dia! <3`);
