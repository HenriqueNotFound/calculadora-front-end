// Função vai mostrar os valores
function display(value) {
    document.getElementById("result").value += value;
}

// Função irá apagar o último dígito do display
function apagarDigito() {
    let currentNum = document.getElementById("result").value;
    currentNum = currentNum.slice(0, -1);
    document.getElementById("result").value = currentNum;
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
