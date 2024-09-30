const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como é possível definir dentro da informática a palavra HARDWARE",
        alternativas: [
            {texto: "É a parte fisíca do computador, algo palpável, possível de toque, é a parte que você chuta.",
                afirmacao: "Perfeito, o HARDWARE é algo fisíco parabéns pelo acerto, UM ACERTO."
            },
            {texto: "É a parte fisíca do computador, essas partes não tem programação nenhuma é somente material.",
                afirmacao: "Em partes, é sim a parte fisíca porém a peça pode conter algo lógico, como por exemplo a placa de vídeo somente uma ventoinha não irá auxiliar de nada."
            },
            {texto: "É a parte lógica, a parte onde não podemos tocar, sendo somente lógica onde não há material envolvido.",
                afirmacao: "Conpletamente errado, o HARDWARE é a parte fisíca, porém pode sim conter algo lógico como o processador que é a peça responsavel por todo o funcionamento do PC."
            }
        ]
    },
    {
        enunciado: "Existe mais de uma linguagem de programação? E o que é uma linguagem?",
        alternativas: [
            {texto: "Não, CSS e HTML não são linguagens, existe somente JAVA. Linguagem é uma forma simplificada de programar substituindo o 0001 ou semelhante",
                afirmacao: "Está errado, porém realmente CSS e HTML não são concideradas linguagens, porém existe C, C++, Python são outras linguagens. A parte da linguagem está correta, ela é ultilizada para simplificar o processo de programação."
            },
            { texto: "Sim, existem diversas linguagens, entre elas português e inglês. Linguagem é somente o idioma em que você irá programar.",
                afirmacao: "Não, linguagem de programação é diferente de idioma, linguagem é uma maneira de programar simplificada, para ajudar os programadores a não ter que escrever tudo em 0001."
            },
            {texto: "Sim, existem diversas linguagens, dentre elas Java, C++, entre outras. Linguagem é uma forma simplificada de programar, diferente de como era no começo usando código binário",
                afirmacao: "Você acertou em cheio, graças as linguagens podemos ter todos os sites que vemos hoje, UM ACERTO"
            }
        ]
    },
    {
        enunciado: "Quem foi Ada Lovelace",
        alternativas: [
            {texto: "Foi a primeira pessoa a criar um computador",
                afirmacao: "Não, ela foi a primeira pessoa a programar uma linguagem. OBRIGADO PELA PARTICIPAÇÃO!!!"
            },
            {texto: "Foi a primeira programadora, ela criou a primeira linguagem após a binária",
                afirmacao: "Acertou em cheio, ela foi a primeira programadora e graças a ela tudo que você usa hoje em dia é possivel. UM ACERTO. OBRIGADO PELA PARTICIPAÇÃO!!!"
            },
            {texto: "Quem é essa? Essa pessoa não teve relevância nenhuma na informática",
                afirmacao: "Preste atenção nas pessoas que estão apresentando, essa a pessoa que criou a primeira linguagem de programação. OBRIGADO PELA PARTICIPAÇÃO!!!"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Com isso o resultado é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
