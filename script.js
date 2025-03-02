// Primera ventana emergente con cuenta regresiva
let countdown = 5;
const countdownElement = document.getElementById("countdown");

// Ocultar PopUp2 al inicio
document.getElementById("popup2").style.display = "none";

function startCountdown() {
    let interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            document.getElementById("popup1").style.display = "none"; // Oculta PopUp1
            showPopup2(); // Muestra PopUp2 si la contraseña no está guardada
        }
    }, 1000);
}

startCountdown();

// Función para mostrar PopUp2 si la contraseña no está guardada
function showPopup2() {
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedPassword === "quesito") {
        console.log("Contraseña ya guardada. PopUp2 no se mostrará.");
    } else {
        document.getElementById("popup2").style.display = "flex"; // Muestra PopUp2
    }
}

// Verificación de contraseña
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "quesito") {
        localStorage.setItem("savedPassword", password); // Guarda la contraseña en localStorage
        document.getElementById("popup2").style.display = "none"; // Oculta PopUp2
    } else {
        alert("Contraseña incorrecta.");
    }
}

// Función para abrir la semana en una nueva página
function openWeek(weekNumber) {
    window.open(`semana${weekNumber}.html`, "_blank");
}
