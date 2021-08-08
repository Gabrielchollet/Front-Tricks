/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

var transactions = {
    nome: [],
    receitas: [],
    despesas: []
}

function addTransactions() {
    let name = String(document.getElementById("nameTransaction").value);
    let value = Number(document.getElementById("valor").value);

    transactions.nome.push(name);

    if (value > 0) {
        transactions.receitas.push(value);
    }
    else {
        transactions.despesas.push(value);
    }

    addRow(name, value);

    limpaInput();
}

function expressResult() {
    let balance = calcTotal().toFixed(2);
    let balanceText = (balance >= 0) ? "Saldo positivo" : "Saldo negativo";
    console.log(`${balanceText} igual a R$ ${balance}`);
    alert(`${balanceText} igual a R$ ${balance}`);
}

function calcTotal() {
    let receita = 0, despesa = 0;
    transactions.receitas.forEach((number) => {
        receita += number;
    })

    transactions.despesas.forEach((number) => {
        despesa += number;
    })

    return receita + despesa;
}

function limpaInput() {
    document.getElementById('valor').value = '';
    document.getElementById('nameTransaction').value = '';
}

function addRow(name, value) {
    tbody = document.getElementById('rowTransactions');
    row = `<tr>
                <td>${name}</td>
                <td>R$ ${value}</td>
            </tr>`;
    tbody.innerHTML += row;
}