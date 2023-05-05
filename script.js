const adviceNoEl = document.querySelector(".advice-no");
const adviceEl = document.getElementById("advice");
const generateBtn = document.getElementById("advice-btn");

generateBtn.addEventListener("click", generateQuote)
generateQuote()
async function generateQuote() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceEl.innerHTML = `"${data.slip.advice}"`
    adviceNoEl.innerHTML = `Advice #${data.slip.id}`
}