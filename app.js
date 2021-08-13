/*
Este exercício será um pouquinho diferente dos anteriores.
Seu desafio é desenvolver uma versão do quiz que:
- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D
Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.
É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:
- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.
Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues
Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
Ps2: o uso do Bootstrap (ou qualquer outra lib CSS) é opcional.
*/

const correctAnswer = ['A', 'A', 'A', 'A',];
const quiz = document.querySelector('.form-quis-exercise');
const question = document.querySelectorAll('.questions')
const popup = document.querySelector('.popup');
const scoreFinal = document.querySelector('.score')
const btFechar = document.querySelector('.fechar');
const formChecks = document.querySelectorAll('.form-check')
let score = 0;


quiz.addEventListener('submit', event => {
    event.preventDefault();
    userAnswers = [quiz.question1.value, quiz.question2.value, quiz.question3.value, quiz.question4.value]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswer[index]){
            score += 25
        }                       
    });

    console.log(score)
    
    if(!userAnswers.includes("")){
        scoreFinal.textContent = `Você alcançou a marca de ${score} PONTOS`
        popup.style.display = 'flex';
        return
    }


    scoreFinal.textContent = 'Você não respondeu a todas as questões'
    popup.style.display = 'flex';

})

    btFechar.addEventListener('click', () => {
    popup.style.display = 'none';
})