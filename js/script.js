const question = document.querySelector("#perguntas");
const responder = document.querySelector("#responder");
const quizzContainer = document.querySelector("#quizz");
const finalContainer = document.querySelector("#container");
const parabens = document.querySelector('#parabens')
const correcao = document.querySelector('#correcao')
const letras = ['a', 'b', 'c', 'd'];
let pontos = 0;
let atualQuestao = 0;

const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "alternativas": [
        {
          "alternativa": "back-end",
          "correto": true
        },
        {
          "alternativa": "front-end",
          "correto": false
        },
        {
          "alternativa": "Sistema operacional",
          "correto": false
        },
        {
          "alternativa": "Banco de dados",
          "correto": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "alternativas": [
        {
          "alternativa": "$var",
          "correto": false
        },
        {
          "alternativa": "var",
          "correto": true
        },
        {
          "alternativa": "@var",
          "correto": false
        },
        {
          "alternativa": "#let",
          "correto": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "alternativas": [
        {
          "alternativa": "#",
          "correto": true
        },
        {
          "alternativa": ".",
          "correto": false
        },
        {
          "alternativa": "@",
          "correto": false
        },
        {
          "alternativa": "/",
          "correto": false
        },
      ]
    },
    {
      "question": "O que significa a sigla HTML",
      "alternativas": [
        {
          "alternativa": "Hotel",
          "correto": false
        },
        {
          "alternativa": "Relógio",
          "correto": false
        },
        {
          "alternativa": "HyperText Markup Language",
          "correto": true
        },
        {
          "alternativa": "Jogo da velha",
          "correto": false
        },
      ]
    },
    {
      "question": "Qual é o símbolo usado para atribuição em muitas linguagens de programação?",
      "alternativas": [
        {
          "alternativa": "#",
          "correto": false
        },
        {
          "alternativa": ".",
          "correto": false
        },
        {
          "alternativa": "@",
          "correto": false
        },
        {
          "alternativa": "=",
          "correto": true
        },
      ]
    },
    {
      "question": "O que é SQL?",
      "alternativas": [
        {
          "alternativa": "Structured Query Language",
          "correto": true
        },
        {
          "alternativa": "Senha de qualidade",
          "correto": false
        },
        {
          "alternativa": "Senha de banco",
          "correto": false
        },
        {
          "alternativa": "Linguagem de estilização",
          "correto": false
        },
      ]
    },
    {
      "question": "Qual é o termo usado para descrever a técnica de testar partes específicas de um programa?",
      "alternativas": [
        {
          "alternativa": "Teste Culinário",
          "correto": false
        },
        {
          "alternativa": "Teste unitário.",
          "correto": true
        },
        {
          "alternativa": "Teste Bancário",
          "correto": false
        },
        {
          "alternativa": "Teste de locação",
          "correto": false
        },
      ]
    },
    {
      "question": "Css serve para:",
      "alternativas": [
        {
          "alternativa": "Estilizar códigos HTML",
          "correto": true
        },
        {
          "alternativa": "Jogar",
          "correto": false
        },
        {
          "alternativa": "Criar códigos prontos em JS",
          "correto": false
        },
        {
          "alternativa": "Poder apagar conteúdos",
          "correto": false
        },
      ]
    },
    {
      "question": "O que é JavaSrcipt?",
      "alternativas": [
        {
          "alternativa": "Uma linguagem de marcação",
          "correto": false
        },
        {
          "alternativa": "Um banco de dados",
          "correto": false
        },
        {
          "alternativa": "Uma linguagem de programação",
          "correto": true
        },
        {
          "alternativa": "Uma inguagem de estilização",
          "correto": false
        },
      ]
    },
    {
      "question": "quando foi criado o GitHub?",
      "alternativas": [
        {
          "alternativa": "2002",
          "correto": false
        },
        {
          "alternativa": "2007",
          "correto": false
        },
        {
          "alternativa": "1999",
          "correto": false
        },
        {
          "alternativa": "2008",
          "correto": true
        },
      ]
    },
]

//Substituição do quizz para a primeira pergunta
function iniciar() {
    //cria primeira pergunta
    criarPergunta(0)
}

//cria uma pergunta
function criarPergunta(i) {
    //limpa questao anterior
    const removeButtons = responder.querySelectorAll('button')

    removeButtons.forEach(function(btn) {
        btn.remove()
    })

    //alterar o texto da pergunta

    const textoPergunta = question.querySelector('#pergunta-texto')
    const numeroPergunta = question.querySelector('#perguntas-numeros')

    textoPergunta.textContent = questions[i].question
    numeroPergunta.textContent = i + 1

    //insere as alternativas
    questions[i].alternativas.forEach(function(alternativa, i) {
        //cria o templade do quizz
        const templade = document.querySelector('.resposta-templade').cloneNode(true)
        
        const letraResposta = templade.querySelector('.letra')
        const textoResposta = templade.querySelector('.resposta-questao')

        letraResposta.textContent = letras[i]
        textoResposta.textContent = alternativa['alternativa']

        templade.setAttribute('correto-alternativa', alternativa['correto'])

        //removee hide e templade class
        templade.classList.remove('hide')
        templade.classList.remove('resposta-templade')

        //inserir alternativa na tela
        responder.appendChild(templade)

        //evento de click no botão
        templade.addEventListener('click', function() {
            checarResposta(this)
        })
    })
    //incrementa o numero da pergunta
    atualQuestao++
}

//verificando reposta do usuario
function checarResposta(btn) {
    const botoes = responder.querySelectorAll('button')
    
    //verifica resposta
    botoes.forEach(function(button) {

        if(button.getAttribute('correto-alternativa') === 'true') {
            button.classList.add('correto')
            //checa se esta certo
            if(btn === button) {
                pontos++
            } 
        } else {
            button.classList.add('errado')
        }
    })

    //proxima pergunta
    novaPerguta()
}

function novaPerguta() {
    setTimeout(function() {
        //verifica se tem perguntas ainda
        if(atualQuestao >= questions.length) {
            //mdg de sucesso
            mensagemFinal()
            return
        }

        criarPergunta(atualQuestao)
    }, 700)
}

//exibe a tela final
function mensagemFinal() {
    mostrar()
    //dados da tela

    //calculo final
    const conta = ((pontos / questions.length) * 100).toFixed(2)

    const display = document.querySelector('#display span')
    display.textContent = conta.toString()

    //numero de perguntas
    const perguntasCorretas = document.querySelector('#correcao')

    perguntasCorretas.textContent = pontos

    //altera total de perguntas

    const totalPerguntas = document.querySelector('#questoes')
    totalPerguntas.textContent = questions.length

    if(conta <= 60.00) {
      parabens.innerHTML = 'Refaça o teste'
      finalContainer.style.color = 'red'
      correcao.style.color = 'red'
    }
}

//mostra ou esconde conta

function mostrar() {
    quizzContainer.classList.toggle('hide')
    finalContainer.classList.toggle('hide')
}

//reinicia quizz

const reiniciar = document.querySelector('#reiniciar')
reiniciar.addEventListener('click', function() {
    atualQuestao = 0
    pontos = 0
    mostrar()
    iniciar()
})

//inicio do quizz
iniciar()