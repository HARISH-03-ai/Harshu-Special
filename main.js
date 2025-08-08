
  
  // Step 1: Randomly assign gift
const result = ["thenga", "thenga", "gift"];
result.sort(() => Math.random() - 0.5); // shuffle

// Step 2: Click events
for (let i = 0; i < 3; i++) {
    const box = document.getElementById(`box${i}`);
    box.addEventListener("click", () => {
        if (result[i] === "gift") {
            showAlert("🎁 Congratulations, My Dear Behna! You won the gift!");
        } else {
            showAlert("👍🏼 Congratulations, My Dear Behna! You got the Thenga!");
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