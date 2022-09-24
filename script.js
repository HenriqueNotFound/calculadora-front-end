// Função vai mostrar os valores
function display(value) {
    document.getElementById("result").value += value;
}

// Função que vai analisar a expressão do display e vai retornar o resultado
function calcular() {
    let expressao = document.getElementById("result").value;
    let resultado = eval(expressao);
    document.getElementById("result").value = resultado;
}

// Limpar os valores
function limparTela() {
    document.getElementById("result").value = "";
}
