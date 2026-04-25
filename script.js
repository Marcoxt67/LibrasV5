/* =========================
   ANIMAÇÃO SCROLL (REVEAL)
========================= */
const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


/* =========================
   MODAL ALFABETO
========================= */
const letras = document.querySelectorAll(".letra");
const modal = document.getElementById("modal");
const video = document.getElementById("video");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const closeBtn = document.querySelector(".close");

/* DESCRIÇÕES */
const dados = {
    A: "Como fazer o sinal:\nMão fechada com o polegar ao lado, palma virada para frente.",
    B: "Como fazer o sinal:\nMão aberta com dedos juntos e palma para frente.",
    C: "Como fazer o sinal:\nMão em formato de C."
};

/* ABRIR MODAL */
letras.forEach(letra => {
    letra.addEventListener("click", () => {
        const letraSelecionada = letra.dataset.letra;
        const videoLink = letra.dataset.video;

        titulo.textContent = letraSelecionada;
        descricao.textContent = dados[letraSelecionada] || "Descrição não disponível.";

        video.src = videoLink;

        modal.style.display = "flex";
    });
});

/* FECHAR BOTÃO */
closeBtn.addEventListener("click", () => {
    fecharModal();
});

/* FECHAR CLICANDO FORA */
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

/* FUNÇÃO CENTRAL (evita código duplicado) */
function fecharModal() {
    modal.style.display = "none";
    video.src = "";
}