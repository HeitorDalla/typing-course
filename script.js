"use strict"

const niveis = [
    'Aprender a digitar é essencial. Comece com práticas diárias.',
    'As crianças correm descalças na areia da praia, enquanto o sol se põe lentamente.',
    'A aprendizagem das habilidades de digitação pode acelerar a execução de tarefas repetitivas e liberar tempo para atividades mais complexas.',
    'Embora a velocidade seja importante, é crucial focar na precisão, pois digitar incorretamente pode resultar em erros críticos em documentos ou códigos.',
    'A digitação não só aprimora a produtividade, mas também influencia a eficiência em ambientes de trabalho de alto desempenho, onde a comunicação rápida e precisa é imprescindível.'
];

const links = document.querySelectorAll("#niveis li a");
const entrada = document.querySelector("#entrada");
const contadorTempo = document.querySelector("#contadorTempo");

let contadorTempoValue = parseInt(contadorTempo.innerHTML);

let intervaloTempo; // Variável para armazenar a váriavel tempo
let tempoIniciado = false; // Para ver se o tempo já foi iniciado

// Função para atualizar de texto a cada click no link
function atualizarTexto (indice) {
    const textoMudar = document.querySelector("#texto");
    textoMudar.textContent = niveis[indice];
};

// Função para iniciar o tempo
function iniciarContagemTempo () {
    if (tempoIniciado) {
        return; // Impede que a contagem começe mais de uma vez
    }
    tempoIniciado = true; // Marca que o tempo foi iniciado

    intervaloTempo = setInterval (() => {
        if (contadorTempoValue === 0) { // Se chegou realmente à zero
            clearInterval(intervaloTempo);

            // Cria o elemento
            const containerConteudo = contadorTempo.closest("#conteudo");
            let errorSpan = criarElementos(containerConteudo);
            errorSpan.innerHTML = `O seu tempo acabou!`;

            const input = document.querySelector("#entrada");
            input.disabled = true;

        } else {
            contadorTempoValue --; // Decrementa 1 segundo
            contadorTempo.textContent = contadorTempoValue;
        }
    }, 1000);
};

// Função que cria elementos
function criarElementos (father) {   
    const novoElemento = document.createElement("span");
    novoElemento.setAttribute("class", "error");
    novoElemento.innerHTML = '';
    father.appendChild(novoElemento);
    return novoElemento;
};

// Função para limpar todos os campos
function limparCampos () {
    // Campo de input
    entrada.value = '';
    entrada.disabled = true;

    // Campos de contadores
    const contadorCorreto = document.querySelector("#contadorCorreto");
    contadorCorreto.textContent = '0'; // Resetar contador de acertos
    const contadorErrado = document.querySelector("#contadorErrado");
    contadorErrado.textContent = '0';  // Resetar contador de erros

    // Limpar o tempo restante
    const contadorTempo = document.querySelector("#contadorTempo");
    contadorTempo.textContent = '60';

    tempoIniciado = false;

    contadorTempoValue = 60;
    tempoIniciado = false;

    if (intervaloTempo) {
        clearInterval(intervaloTempo)
    }
};

// Em cada link, limpar todos os campos e trocar de texto
links.forEach((link, index) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();

        limparCampos();
        const input = document.querySelector("#entrada");
        input.disabled = false; // Habilita o campo input

        atualizarTexto(index);
    });
});

// Evento que aciona a contagem do tempo assim que clica no input
const entradaInput = document.querySelector("#entrada");
entradaInput.addEventListener("input", () => {
    iniciarContagemTempo();
});
