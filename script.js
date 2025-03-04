"use strict"

const niveis = [
    'Aprender a digitar é essencial. Comece com práticas diárias.',
    'As crianças correm descalças na areia da praia, enquanto o sol se põe lentamente.',
    'A aprendizagem das habilidades de digitação pode acelerar a execução de tarefas repetitivas e liberar tempo para atividades mais complexas.',
    'Embora a velocidade seja importante, é crucial focar na precisão, pois digitar incorretamente pode resultar em erros críticos em documentos ou códigos.',
    'A digitação não só aprimora a produtividade, mas também influencia a eficiência em ambientes de trabalho de alto desempenho, onde a comunicação rápida e precisa é imprescindível.'
];

const links = document.querySelectorAll("#niveis li a");

let intervaloTempo; // Variável para armazenar a váriavel tempo
let tempoIniciado = false; // Para ver se o tempo já foi iniciado

function atualizarTexto (indice) {
    const textoMudar = document.querySelector("#texto");
    textoMudar.textContent = niveis[indice];
};

links.forEach((link, index) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();
        // Desabilitar o input
        const input = document.querySelector("#entrada");
        input.style.display = 'block'; // Torna o campo input visível
        input.disabled = false; // Habilita o campo input

        atualizarTexto(index);
    });
});

// Função para iniciar o tempo
function iniciarContagemTempo () {
    if (tempoIniciado) {
        return; // Impede que a contagem começe mais de uma vez
    }
    tempoIniciado = true; // Marca que o tempo foi iniciado

    const contadorTempo = document.querySelector("#contadorTempo");
    let contadorTempoValue = parseInt(contadorTempo.innerHTML);

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

// Evento que aciona a contagem do tempo assim que clica no input
const entradaInput = document.querySelector("#entrada");
entradaInput.addEventListener("click", (evento) => {
    iniciarContagemTempo();
});