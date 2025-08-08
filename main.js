// Step 1: Randomly assign gift
const result = ["thenga", "thenga", "gift"];
result.sort(() => Math.random() - 0.5); // shuffle

let clickCount = 0; // how many tries used
let gameOver = false; // track game state

// Step 2: Click events
for (let i = 0; i < 3; i++) {
    const box = document.getElementById(`box${i}`);

    box.addEventListener("click", () => {
        // Stop if game over or box already opened
        if (gameOver || box.classList.contains("opened")) return;

        clickCount++;
        box.classList.add("opened");

        if (result[i] === "gift") {
            showAlert("🎁 Congratulations, My Dear Behna! You won the gift!");
            gameOver = true; // stop game immediately if gift found
        } else {
            showAlert("👍🏼 Congratulations, My Dear Behna! You got the Thenga!");
            if (clickCount >= 2) {
                gameOver = true; // stop after 2 thengas
            }
        }
    });
}

// Show custom alert
function showAlert(message) {
    document.querySelector("#customAlert p").textContent = message;
    document.getElementById("customAlert").style.display = "flex";
}

// Close custom alert
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}