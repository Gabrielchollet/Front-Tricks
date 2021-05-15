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
    let value = Number(prompt("Indique o valor da transação realizada: "))

    if (value > 0) {
        transactions.receitas.push(value)
    }
    else {
        transactions.despesas.push(value)
    }
}

function calcTotal() {
    let receita, despesa;
    transactions.receitas.forEach((number, index, array) => {
        receita += Number(number)
    })

    transactions.despesas.forEach((number, index, array) => {
        despesa += Number(number)
    })

    let saldo = receita - despesa

    return saldo
}

function expressResult() {
    let balance = (calcTotal() > 0) ? "Saldo positivo" : "Saldo negativo"
    console.log(balance)
    console.log(calcTotal())
}