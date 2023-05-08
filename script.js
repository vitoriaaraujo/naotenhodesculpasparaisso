function yesResponse() {
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
    const img2 = document.querySelector("#img2");


    yesButton.addEventListener("click", () => {
        const text = document.querySelector("#text");
        const img = document.querySelector("#img");
        const p = document.querySelector("#presentation");

        noButton.style.display = "none";
        yesButton.style.display = "none";
        p.style.display = "none";
        img2.style.display = "none";

        text.style.display = "block";
        img.style.display = "block";

    })
}

function noResponse() {
    const noButton = document.querySelector("#no");
    const img = document.querySelector("#img2");


    noButton.addEventListener("click", () => {
        img.style.display = "block";

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Gerar uma posição aleatória para o botão "Não"
        const randomX = Math.floor(Math.random() * (screenWidth - 100));
        const randomY = Math.floor(Math.random() * (screenHeight - 50));

        // Definir a posição do botão "Não" como a posição aleatória
        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    })
}