/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

let employee: {nome: string, code: number} = {
    code: 10,
    nome: 'John'
};

/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
interface IPessoa{
    nome: string,
    idade: number,
    profissao: string
}


const pessoa1: IPessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: 'Atriz'     
}

const pessoa2: IPessoa = {
    nome: 'Robson',
    idade: 19,
    profissao: 'Padeiro'     
}

const pessoa3: IPessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: 'Atriz'     
}

const pessoa4: IPessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: 'Padeiro'     
}


