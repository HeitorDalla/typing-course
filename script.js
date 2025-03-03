"use strict"

const niveis = [
    'Aprender a digitar é essencial. Comece com práticas diárias.',
    'As crianças correm descalças na areia da praia, enquanto o sol se põe lentamente.',
    'A aprendizagem das habilidades de digitação pode acelerar a execução de tarefas repetitivas e liberar tempo para atividades mais complexas.',
    'Embora a velocidade seja importante, é crucial focar na precisão, pois digitar incorretamente pode resultar em erros críticos em documentos ou códigos.',
    'A digitação não só aprimora a produtividade, mas também influencia a eficiência em ambientes de trabalho de alto desempenho, onde a comunicação rápida e precisa é imprescindível.'
];

console.log(niveis[0])

const links = document.querySelectorAll("#niveis li a");

function atualizarTexto (indice) {
    const textoMudar = document.querySelector("#texto");
    textoMudar.textContent = niveis[indice];
};

links.forEach((link, index) => {
    link.addEventListener("click", (evento) => {
        const input = document.querySelector("#entrada");

        input.style.display = 'block'; // Torna o campo input visível

        input.disabled = false; // Habilita o campo input

        evento.preventDefault();
        atualizarTexto(index);
    });
});

