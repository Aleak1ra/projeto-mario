const btnAbrirModal = document.querySelector(".btn");
const closeModalButton = document.getElementsByClassName("fechar-modal")[0];
const modal = document.querySelector(".modall");
const player = document.getElementById("player");
const linkDoVideo = player.src;

function alterarModal() {
    modal.classList.toggle("aberto");
}

btnAbrirModal.addEventListener("click", () => {
    alterarModal();
    player.setAttribute("src", linkDoVideo);
    
});

closeModalButton.addEventListener("click", () => {
    alterarModal();
    player.setAttribute("src", "");
    
});




