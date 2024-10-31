// Classe Construtora;
class AlunoENota {
    constructor(nomeDoAluno, notaDoAluno) {
        this.aluno = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

// Array com as informações dos alunos (Nome e Nota);
const informacoesDosAlunos = [
    {nome: 'Eduardo', nota: 7},
    {nome: 'José', nota: 8},
    {nome: 'Maria', nota: 6},
    {nome: 'Luis', nota: 4},
    {nome: 'Irineu', nota: 5}
]

// Criando um Array com as informações dos alunos, o método .map e uma arrow function que utiliza a Classe Construtora;
const todosOsAlunosENotas = informacoesDosAlunos.map(alunoAtual => new AlunoENota(alunoAtual.nome, alunoAtual.nota))

function filtroAlunosAcimaDaMedia(aluno) {
    return aluno.nota >= 6;
}

const alunosAcimaDaMedia = todosOsAlunosENotas.filter(filtroAlunosAcimaDaMedia);

// Retorna o Array com os Alunos que estão Acima da Média;
console.log(alunosAcimaDaMedia);