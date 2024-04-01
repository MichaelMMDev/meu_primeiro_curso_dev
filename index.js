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

// iniciando objetos:
//os objetos vêm solucionar os casos em que  temos varias informações relacionadas a uma mesma variável.

const nomeAluna ='Lais'
const endereço =' casa 10, rua 11' 
const telefone = 86999988734 
const nota = 8
const sala = 2 
const turno = 'manhãm'

// o objeto pode guardar todas as informações da Lais dentro dele, e quando quisermos chamar alguma delas, só "falamos" o nome Lais
// esse conceito, de objeto, se assemelha muito ao de variável, e entendemos variável como uma caixinha na memoria do pc
// entenderemos agora o objeto, que é uma guarda roupa ou um armário, chio de gavetas, em suma, o objeto só consegue armazenar mais coisas que uma variável.


// estrutura dos objetos:

const lais = {
    endereço:' casa 10, rua 11',
    telefone: 86999988734,
    nota: 8,
    sala: 2,
    turno: 'manhãm'
}
console.log(lais.nota)

// tudo que está dentro do objeto chamamos de propiedades; usamos '{}' para iniciar o objeto; usamos ',' para separar as propiedades; usamos '.' para acessar as propiedades


// estrutura de arrays
// ela guarda vários objetos em uma variável só

// receita em arrays

const nescal={
    ferramentas1:'uma chaleira, um copo, uma colher de sopa',
    engredientes1:'Nescal: 50g, Leite: 60g, água: 50ml de água',
    modoDePreparo1:'ferva a água, misture o leite e o nescal em um copo, coloque a água dentro do copo e mecha. Seu nescal está pronto!'

}

const paoComOvo={
    ferramentas2:'uma frigideira, uma colher, um prato.',
    engredientes2:'um pão massa grossa, 2 ovos, 20g de manteiga, 1g de sal',
    modoDePreparo2:'pegue a frigideira, coloque-a para esquentar a fofo médio no fogão, despeje a manteiga com uma colher, e espere derreter, espalhe a manteiga com a colher, quebre os ovos dentro da panela e adcione o sal, mecha os ovos até ficar em um ponto aguadavel a você '
}

const cafe= {
    ferramentas3:'uma chaleira, uma xícara, uma colher, um coador de café',
    engredientes3:'300ml de água, 1 colher de pó de café, meia colher de açucar',
    modoDePreparo3:' despeje a água na chaleira, coloque-os em fogo médio, quando a aguá ferver desligue o fogo e acrescente o pó de café, mecha a mistura, após mecher bem despeje o café na chicará por meio do coador, coloque o tanto que desejar na chicará, após isso, adicioneo açucar, pronto, seu café está pronto '
}

const beju= {
    ferramentas4:'uma frigideira, uma colher, um prato ',
    engredientes4:'2 punhados de goma fresca, uma pitada de sal, 50g de manteiga ',
    modoDePreparo4:'coloque a frigideira em fogo alto, despeje a massa e espalhe-a, quando a massa soltar da panela vire-a e deixe o outro lado dourar, após algusn minutos, quando as duas partes estiverem douradas, coloque-o no prato e passe  a manteiga, enrrole o beju e estará pronto '
} 

const paoComManteiga={
    ferramentas5:'umprato, uma colher',
    engredientes5:'um pão, 20g de manteiga',
    modoDePreparo5:'pegue o pão e espalhe a manteiga, pronto seu pão está pronto '
}

const cafeDaManham=[
    {ferramentas2:'uma frigideira, uma colher, um prato.',
engredientes2:'um pão massa grossa, 2 ovos, 20g de manteiga, 1g de sal',
modoDePreparo2:'pegue a frigideira, coloque-a para esquentar a fofo médio no fogão, despeje a manteiga com uma colher, e espere derreter, espalhe a manteiga com a colher, quebre os ovos dentro da panela e adcione o sal, mecha os ovos até ficar em um ponto aguadavel a você '},

{ferramentas2:'uma frigideira, uma colher, um prato.',
engredientes2:'um pão massa grossa, 2 ovos, 20g de manteiga, 1g de sal',
modoDePreparo2:'pegue a frigideira, coloque-a para esquentar a fofo médio no fogão, despeje a manteiga com uma colher, e espere derreter, espalhe a manteiga com a colher, quebre os ovos dentro da panela e adcione o sal, mecha os ovos até ficar em um ponto aguadavel a você '},

{ferramentas3:'uma chaleira, uma xícara, uma colher, um coador de café',
engredientes3:'300ml de água, 1 colher de pó de café, meia colher de açucar',
modoDePreparo3:' despeje a água na chaleira, coloque-os em fogo médio, quando a aguá ferver desligue o fogo e acrescente o pó de café, mecha a mistura, após mecher bem despeje o café na chicará por meio do coador, coloque o tanto que desejar na chicará, após isso, adicioneo açucar, pronto, seu café está pronto '},

{ferramentas4:'uma frigideira, uma colher, um prato ',
engredientes4:'2 punhados de goma fresca, uma pitada de sal, 50g de manteiga ',
modoDePreparo4:'coloque a frigideira em fogo alto, despeje a massa e espalhe-a, quando a massa soltar da panela vire-a e deixe o outro lado dourar, após algusn minutos, quando as duas partes estiverem douradas, coloque-o no prato e passe  a manteiga, enrrole o beju e estará pronto '},

{ ferramentas5:'umprato, uma colher',
engredientes5:'um pão, 20g de manteiga',
modoDePreparo5:'pegue o pão e espalhe a manteiga, pronto seu pão está pronto '},
]

console.log(cafeDaManham[2].ferramentas3, cafeDaManham[2].engredientes3, cafeDaManham[2].modoDePreparo3)


// quando quisermos usar um código que ja escrevemos podemos chama-lo através de uma função
//só precisamos previamente declara-la e na h de usar é só chamar 

function soma (a,b){
    return a+b
}

console.log(soma (5,6))

// toda função tem um comando(function, um nome(soma), os parametros dentro de parenteses(a,b...),e dentro dos cochetes vão os comandos, dados pelo nome (return)

function juntar (a,b){
    return a+b
}
console.log(juntar (8,7))

//estruturas de repetição 
// existe o comando 'for', ele é responsavel por repetir um código até que uma condição seja verdadeira.
//para isso, devemos usar uma nova variável chamada 'let', ela é diferente de 'const' pois pode ser auterada durante a execução do código.

for( let i=0 ; i<9 ; i++){
    console.log(i)
}

for (let idade= 8; idade<56; idade++){
    console.log(idade)
}