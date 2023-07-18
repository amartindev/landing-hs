// Fecha objetivo de la cuenta regresiva (formato: año, mes (0-11), día, hora, minuto, segundo)
const targetDate = new Date("2023-07-21T23:59:59").getTime();

// Actualizar cuenta regresiva cada segundo
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    // La cuenta regresiva ha terminado
    clearInterval(countdownInterval);
  } else {
    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar los valores en los elementos HTML
    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
  }
}, 1000);
