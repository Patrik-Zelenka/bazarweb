const words = ["ovce", "hory", "kolo", "slunce", "strom"];
const randomWord = words[Math.floor(Math.random() * words.length)];
const hint = "Ovoce";

document.getElementById("hint").textContent = `Nápověda: ${hint}`;

function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    if (randomWord.includes(guess)) {
        document.getElementById("feedback").textContent = "Správně!";
    } else {
        document.getElementById("feedback").textContent = "Špatně, zkuste znovu.";
    }
}
