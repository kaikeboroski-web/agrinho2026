// Seleciona elementos do DOM
const quantidadeInput = document.getElementById('quantidade');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');

// Função para calcular impacto ambiental
function calcularImpacto() {
    const quantidade = parseInt(quantidadeInput.value);

    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.textContent = "Por favor, insira um número válido de árvores.";
        return;
    }

    // Lógica: cada árvore plantada captura em média 21 kg de CO2 por ano
    const impactoCO2 = quantidade * 21;
    resultadoDiv.textContent = `Parabéns! Essas árvores podem capturar aproximadamente ${impactoCO2} kg de CO2 por ano.`;
}

// Evento de clique
calcularBtn.addEventListener('click', calcularImpacto);