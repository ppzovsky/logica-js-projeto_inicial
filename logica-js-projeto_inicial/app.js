let numeroSecreto = parseInt(Math.random() * 10)+1;
let tentativas = 0;

function fazerChute() {
    let chute = parseInt(document.getElementById("chute").value);
    let dica = document.getElementById("dica");
    let tentativasTexto = document.getElementById("tentativas");

    if (isNaN(chute) || chute < 1 || chute > 50) {
        dica.textContent = "Por favor, escolha um número entre 1 e 50.";
        return;
    }

    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        document.getElementById("mensagemVitoria").textContent = 
            `Você descobriu o número secreto depois de ${tentativas} ${palavraTentativa}!`;
        abrirModal();
    } else {
        if (chute > numeroSecreto) {
            dica.textContent = "O número secreto é menor.";
        } else {
            dica.textContent = "O número secreto é maior.";
        }
        tentativas++;
        tentativasTexto.textContent = `Tentativas: ${tentativas}`;
    }
    document.getElementById("chute").value = "";
}
function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    console.log("fff")
    tentativas = 0;
}
