document.querySelector("title").textContent = "Rock Paper Scissors";
/*
 *get computed value => rock, paper or Scissors
 *check if comValue is equal to userInput
 *tell the user
 */
const buttons = document.querySelectorAll("button.emoji");
let emojiArray = ["✊", "✌", "🖐"];
let pElement = document.querySelector("div.container-1 p");
let h2Dlw = document.querySelector(".dlw");
let h2Score = document.querySelector(".score");
let score = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let emoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    if (button.textContent === "✊") {
      //for ✊
      if (emoji === "✊") {
        pElement.textContent = "✊ vs ✊";
        h2Dlw.textContent = "IT'S A DRAW!!!";
        h2Score.textContent = `Score: ${score}.`;
      } else if (emoji === "🖐") {
        pElement.textContent = "✊ vs 🖐";
        h2Dlw.textContent = "YOU LOSE!!!";
        --score;
        h2Score.textContent = `Score: ${score}.`;
      } else if (emoji === "✌") {
        pElement.textContent = "✊ vs ✌";
        h2Dlw.textContent = "YOU WIN!!!";
        ++score;
        h2Score.textContent = `Score: ${score}.`;
      }
    }
    if (button.textContent === "🖐") {
      //for 🖐
      if (emoji === "🖐") {
        pElement.textContent = "🖐 vs 🖐";
        h2Dlw.textContent = "IT'S A DRAW!!!";
        h2Score.textContent = `Score: ${score}.`;
      } else if (emoji === "✌") {
        pElement.textContent = "🖐 vs ✌";
        --score;
        h2Dlw.textContent = "YOU LOSE!!!";
        h2Score.textContent = `Score: ${score}.`;
      } else if (emoji === "✊") {
        pElement.textContent = "🖐 vs ✊";
        h2Dlw.textContent = "YOU WIN!!!";
        ++score;
        h2Score.textContent = `Score: ${score}.`;
      }
    }
    if (button.textContent === "✌") {
      //for ✌
      if (emoji === "✌") {
        pElement.textContent = "✌ vs ✌";
        h2Dlw.textContent = "IT'S A DRAW!!!";
        h2Score.textContent = `Score: ${score}.`;
      } else if (emoji === "✊") {
        pElement.textContent = "✌ vs ✊";
        h2Dlw.textContent = "YOU LOSE!!!";
        --score;
        h2Score.textContent = `Score: ${score}.`;
      } else if (emoji === "🖐") {
        pElement.textContent = "✌ vs 🖐";
        h2Dlw.textContent = "YOU WIN!!!";
        ++score;
        h2Score.textContent = `Score: ${score}.`;
      }
    }
  });
});

function clearScores() {
  [pElement, h2Dlw, h2Score].forEach((item) => {
    item.textContent = "";
  });
  score = 0;
}
