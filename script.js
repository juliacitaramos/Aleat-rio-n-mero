let numeroSorteado = 0;
let pontuacao = 0;

const sortearBtn = document.getElementById("sortear-btn");
const inputContainer = document.getElementById("input-container");
const palpiteInput = document.getElementById("palpite-input");
const enviarBtn = document.getElementById("enviar-btn");
const resultadoDiv = document.getElementById("resultado");
const revealContainer = document.getElementById("reveal-container");
const novoSorteioBtn = document.getElementById("novo-sorteio-btn");
const scoreSpan = document.getElementById("score");

// Sorteia um número aleatório inteiro entre 10 e 20 (inclusivo)
sortearBtn.addEventListener("click", () => {
    numeroSorteado = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    
    sortearBtn.classList.add("hidden");
    inputContainer.classList.remove("hidden");
    resultadoDiv.textContent = "";
    palpiteInput.value = "";
    palpiteInput.focus();
});

function processarPalpite() {
    const palpiteUsuario = parseInt(palpiteInput.value);
    
    if (isNaN(palpiteUsuario) || palpiteUsuario < 10 || palpiteUsuario > 20) {
        alert("Por favor, digite um número válido entre 10 e 20!");
        return;
    }

    if (palpiteUsuario === numeroSorteado) {
        resultadoDiv.innerHTML = `VOCÊ ACERTOU!<br><span style="font-size: 1rem; color: #4a2e3b;">O número sorteado era: ${numeroSorteado}</span>`;
        resultadoDiv.className = "message success";
        pontuacao++;
        scoreSpan.textContent = pontuacao;
    } else {
        resultadoDiv.innerHTML = `ERROU!<br><span style="font-size: 1rem; color: #4a2e3b;">O número sorteado era: ${numeroSorteado}</span>`;
        resultadoDiv.className = "message error";
    }

    inputContainer.classList.add("hidden");
    revealContainer.classList.remove("hidden");
}

enviarBtn.addEventListener("click", processarPalpite);

palpiteInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        processarPalpite();
    }
});

novoSorteioBtn.addEventListener("click", () => {
    revealContainer.classList.add("hidden");
    sortearBtn.classList.remove("hidden");
    resultadoDiv.textContent = "";
    resultadoDiv.className = "message";
});