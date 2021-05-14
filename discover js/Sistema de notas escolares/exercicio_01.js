/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* de 80 - 89      - B
* de 70 - 79      - C
* de 60 - 69      - D
* de 50 - 59      - F

*/

function conversor(value) {
    if (value > 90) 
    {
        value = 'A'
    }
    else if (value > 80) {
        value = 'B'
    }
    else if (value > 70) {
        value = 'C'
    }
    else if (value > 60) {
        value = 'D'
    }
    else if (value > 50 && value < 60) {
        value = 'F'
    }
  return value
}

const tbodyEL = document.querySelector('tbody')

function exibirNotasNaTela() {
  const nomeAluno = document.getElementById("nome").value
  const nota = document.getElementById("nota").value
  /*
  let html = ""
  html += "<tr><td>" + nomeAluno + "</td>"
  html += "<td>" + conversor(nota) + "</td>"
  html += "<td>" + nota + "</td></tr>"
  var tabelaNotas = document.getElementById("tabelaNotas")
  tabelaNotas.innerHTML = html
  */
  tbodyEL.innerHTML += `
      <tr>
          <td>${nomeAluno}</td>
          <td>${conversor(nota)}</td>
          <td>${nota}</td>
      </tr>
  `;

  
  limpaInput()
}

function limpaInput() {
  document.getElementById('nome').value=''
  document.getElementById('nota').value=''
}