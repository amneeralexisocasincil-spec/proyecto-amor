
// ESPERAR A QUE CARGUE TODA LA PÁGINA

document.addEventListener("DOMContentLoaded", function () {

    // SELECCIONAR LOS ELEMENTOS HTML

    const openButton = document.getElementById("openButton");
    const letter = document.getElementById("letter");

    const surpriseButton = document.getElementById("surpriseButton");
    const surprise = document.getElementById("surprise");

    const stars = document.getElementById("stars");
    const hearts = document.getElementById("hearts");


    // 1. CREAR ESTRELLAS AUTOMÁTICAMENTE

    for (let i = 0; i < 90; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        // POSICIÓN ALEATORIA

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // VELOCIDAD ALEATORIA

        star.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        stars.appendChild(star);
    }


    // 2. CREAR CORAZONES FLOTANTES

    function createHeart() {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML = "♥";

        // POSICIÓN ALEATORIA

        heart.style.left = Math.random() * 100 + "%";

        // TAMAÑO ALEATORIO

        heart.style.fontSize =
            (Math.random() * 20 + 12) + "px";

        // VELOCIDAD DE ANIMACIÓN

        heart.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        hearts.appendChild(heart);

        // ELIMINAR CORAZÓN DESPUÉS DE SU ANIMACIÓN

        setTimeout(function () {
            heart.remove();
        }, 10000);
    }

    // GENERAR UN CORAZÓN CADA 500 MILISEGUNDOS

    setInterval(createHeart, 500);


    // 3. ABRIR LA CARTA DE AMOR

    openButton.addEventListener("click", function () {

        letter.classList.toggle("hidden");

        if (letter.classList.contains("hidden")) {

            openButton.innerHTML = "Abrir mi corazón ♡";

        } else {

            openButton.innerHTML = "Cerrar mi carta ♥";

            // DESPLAZARSE HASTA LA CARTA

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });


    // 4. MOSTRAR LA SORPRESA FINAL

    surpriseButton.addEventListener("click", function () {

        surprise.classList.toggle("hidden");

        if (surprise.classList.contains("hidden")) {

            surpriseButton.innerHTML = "Descubrir sorpresa ✨";

        } else {

            surpriseButton.innerHTML = "Ocultar sorpresa ♥";

            surprise.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // CREAR UNA LLUVIA DE CORAZONES

            for (let i = 0; i < 25; i++) {

                setTimeout(createHeart, i * 100);

            }

        }

    });

});
