var listaDePeças = ["Cilindro de Roda", "Sensor de Temperatura", "Servo Freio","Pinça de Freio"]

if(listaDePeças.length < 10) {
    //é possivel cadastrar peças
    console.log("È possivel cadastrar mais peças")
} else{
    console.log("Nao tem mais espaço nesta lista, Imposivel cadastrar");
}

let peso = 150;

if (peso < 100) {
    console.log("A peça deve pesar no minimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

// = -> Atribuição de Valor, ler com RECEBE
// == -> Verificação se os valores são iguais
// === -> Verificae se o valor é igual e tbm o valor

let nomedaPeça = "";

if(nomedaPeça.length > 3){
    console.log("nome de peça esta adequado para o casastro!")
} else if(nomedaPeça.length == 0){
    console.log("o nome nao pode ser vazio")
}else{
    console.log("O nome deve ter mais de 3 cacteres, digite um nome adequado ")
}
switch (nomedaPeça.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais que três caracteres.")

    default:
        console.log("Nome de peça está adequado para o cadastro!")
        break;
}