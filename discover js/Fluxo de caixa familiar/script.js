/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

var transactions = {
    receitas: [],
    despesas: []
}

function addTransactions() {
    let value = Number(document.getElementById("valor").value)

    if (value > 0) {
        transactions.receitas.push(value)
    }
    else {
        transactions.despesas.push(value)
    }
}

function expressResult() {
    let saldo = calcTotal()
    let balance = (saldo > 0) ? "Saldo positivo" : "Saldo negativo"
    alert(balance + " igual a " + saldo)
}


function calcTotal() {
    let receita = 0, despesa = 0;
    transactions.receitas.forEach((number) => {
        receita += number
    })

    transactions.despesas.forEach((number) => {
        despesa += number
    })

    

    return receita + despesa
}