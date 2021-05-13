/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* de 80 - 89      - B
* de 70 - 79      - C
* de 60 - 69      - D
* de 50 - 59      - F

*/

var nota = prompt("Digite sua nota: ");

convert(nota);

function convert(value) {
    if (value > 90) 
    {
        value = 'A'
        alert("Sua nota é " + value)
    }
    else if (value > 80) {
        value = 'B'
        alert("Sua nota é " + value)
    }
    else if (value > 70) {
        value = 'C'
        alert("Sua nota é " + value)
    }
    else if (value > 60) {
        value = 'D'
        alert("Sua nota é " + value)
    }
    else (value > 50)
    {
        value = 'F'
        alert("Sua nota é " + value)
    }
}