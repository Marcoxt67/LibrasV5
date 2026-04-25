/* =========================
   ANIMAÇÃO SCROLL (REVEAL)
========================= */
const elements = document.querySelectorAll('.reveal');

if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
}


/* =========================
   NAVBAR MOBILE (HAMBURGUER)
========================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links"); // 👈 corrigido

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


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
    C: "Como fazer o sinal:\nMão em formato de C.",
    D: "Como fazer o sinal:\nMão formando a letra D.",
    E: "Como fazer o sinal:\nDedos curvados tocando o polegar."
};

/* ABRIR MODAL */
if (letras.length > 0) {
    letras.forEach(letra => {
        letra.addEventListener("click", () => {

            const letraSelecionada = letra.dataset.letra;
            const videoLink = letra.dataset.video;

            if (!videoLink || videoLink === "#") return;

            titulo.textContent = letraSelecionada;

            const texto = dados[letraSelecionada] || "Descrição não disponível.";
            descricao.innerHTML = texto.replace(/\n/g, "<br>");

            video.src = videoLink;
            modal.style.display = "flex";
        });
    });
}

/* FECHAR BOTÃO */
if (closeBtn) {
    closeBtn.addEventListener("click", fecharModal);
}

/* FECHAR CLICANDO FORA */
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

/* ESC PARA FECHAR */
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharModal();
    }
});

/* FUNÇÃO CENTRAL */
function fecharModal() {
    if (modal && video) {
        modal.style.display = "none";
        video.src = "";
    }
}