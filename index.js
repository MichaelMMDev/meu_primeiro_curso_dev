// str = a nome, templare str = nome2 e nome3, na templare eu posso chamar outras variáveis.

const nome= 'mchael22';
console.log(nome)

const nome2 = `sou eu ${nome} `;
console.log(nome2)

const nome3 = ` eu sou:  ${nome} `;
console.log(nome3)

// variável numerica( number ), não é necessário colocar " "

const notaAluno01= 9.8
console.log(notaAluno01)

// o comando console.log(typeof + o nome da variável), me diz  o tipo dela

console.log(typeof notaAluno01)

// cauculadora de média 

const nota01= 10
const nota02= 1.7
const nota03= 8.0

const media = (nota01+nota02+nota03)/2

console.log(media)

if (media >5  ){
    console.log(`Parabéns turma, o resultado da sua média foi ${media}, ou seja, foram aprovados.`)
}
else{
    console.log(`O resultado da turma não foi satisfatório: ${media}, a turma deve estudar mais.`)
}