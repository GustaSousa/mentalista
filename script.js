const maxNumber = 10;
const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
let attempts = 0;
const maxAttempts = 3;

function handleGuess() {
  const userInput = document.querySelector("input");
  const userGuess = parseInt(userInput.value);
  const message = document.querySelector("p");
  const button = document.querySelector("button");

  if (isNaN(userGuess) || userGuess < 0 || userGuess > maxNumber) {
    message.textContent = `Por favor, digite um número entre 0 e ${maxNumber}`;
    return;
  }

  attempts++;

  if (randomNumber === userGuess) {
    message.textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
    button.disabled = true;
    userInput.disabled = true;
    return;
  }

  if (attempts >= maxAttempts) {
    message.textContent = `Game Over! O número era ${randomNumber}`;
    button.disabled = true;
    userInput.disabled = true;
    return;
  }

  const remainingAttempts = maxAttempts - attempts;
  if (randomNumber > userGuess) {
    message.textContent = `O número é maior! Você tem ${remainingAttempts} tentativas restantes`;
  } else {
    message.textContent = `O número é menor! Você tem ${remainingAttempts} tentativas restantes`;
  }

  userInput.value = "";
  userInput.focus();
}

function resetGame() {
  window.location.reload();
}

document.querySelector("button").addEventListener("click", handleGuess);
