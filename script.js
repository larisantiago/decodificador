/* CHAVES DA CRIPTOGRAFIA:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original. */

var textAreaCod = document.querySelector(".txt-cod");
var textAreaDecod = document.querySelector(".txt-decod");


function btnCrip() {
    var entrada = criptografar(textAreaCod.value);
    textAreaDecod.value = entrada;
    textAreaCod.value = "";
}

function criptografar(fraseCriptografada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]];
    fraseCriptografada = fraseCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (fraseCriptografada.includes(matrizCodigo[i][0])) {
            fraseCriptografada = fraseCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return fraseCriptografada;

}