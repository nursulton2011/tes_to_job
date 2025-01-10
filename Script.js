// Проверка возраста
window.onload = function() {
  const ageModal = document.getElementById('ageModal');
  const confirmAgeButton = document.getElementById('confirmAge');
  const denyAgeButton = document.getElementById('denyAge');

  // Показываем модалку для возраста
  if (!localStorage.getItem('ageVerified')) {
    ageModal.style.display = 'flex';
  }

  // Подтверждаем возраст
  confirmAgeButton.onclick = function() {
    localStorage.setItem('ageVerified', 'true');
    ageModal.style.display = 'none';
  };

  // Если пользователь не старше 18 лет, переходим на страницу "police.html"
  denyAgeButton.onclick = function() {
    window.location.href = 'privacy-police.html'; // Перенаправление на страницу
  };
};
document.getElementById("game-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const bet = parseInt(document.getElementById("bet").value, 10);
  const guess = parseInt(document.getElementById("guess").value, 10);
  const randomNumber = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10
  const resultDiv = document.getElementById("result");

  if (guess === randomNumber) {
    const winnings = bet * 2;
    resultDiv.textContent = `Поздравляем! Вы угадали число ${randomNumber} и выиграли ${winnings} монет!`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `Вы не угадали! Загаданное число было ${randomNumber}. Вы потеряли ${bet} монет.`;
    resultDiv.style.color = "red";
  }

  // Очистить форму после игры
  document.getElementById("bet").value = "";
  document.getElementById("guess").value = "";
});
