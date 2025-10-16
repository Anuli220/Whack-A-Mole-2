const moles = document.querySelectorAll(".mole");

let score = 0;
let gameActive = false;
let moleInterval;
let timer;

function randomMole() {
    const random = Math.floor(Math.random() * moles.length);
    return moles[random];
}

function showMole() {
    const mole = randomMole();
    mole.classList.add("up");

    // the setTimeOut has 2 parameters; a function(we use the arrow function normally) and time

    setTimeout(() => mole.classList.remove("up"), 800);
}

function startGame() {
    if (gameActive) return;
    score = 0;
    document.getElementById('score').textContent = `score: ${score}`;
    document.getElementById('message').textContent = '';
    gameActive = true;
    moleInterval = setInterval(showMole, 900);
    timer = setTimeout(endGame, 30000);
}

function endGame() {
    clearInterval(moleInterval);
    gameActive = false;
    document.getElementById('message').textContent = `Game Over! Final Score: ${score}`;
}

function resetGame() {
    clearInterval(moleInterval);
    clearTimeout(timer);
    score = 0;
    gameActive = false;
    document.getElementById("score").textContent = `score: ${score}`;
    document.getElementById("message").textContent = "Press Start To Play Again!";
}

moles.forEach(mole => {
    mole.addEventListener("click", () => {
        if (!gameActive || !mole.classList.contains("up")) return;
        score++;
        document.getElementById("score").textContent = `score: ${score}`;
        mole.classList.remove("up");
    });
});