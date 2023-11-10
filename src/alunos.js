const alunos = [
    { nome: 'Gabriele', nota: 10 },
    { nome: 'Jessica', nota: 6 },
    { nome: 'Otávio', nota: 3 },
    { nome: 'Lucas', nota: 9 },
    { nome: 'Vanessa', nota: 5 },
];

function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovadosArray = alunosAprovados(alunos);

console.log('Os alunos aprovados são: ', aprovadosArray);