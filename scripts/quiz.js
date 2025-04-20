let selectedQuiz= JSON.parse(localStorage.getItem("selected Quiz"))
let questions=selectedQuiz.questions

document.getElementById("quiz-title").innerHTML=selectedQuiz.title
document.getElementById("quiz-dec").innerHTML=selectedQuiz.description

for (let i = 0; i < questions.length; i++) {
    let optionsHTML = "";
  
    for (let j = 0; j < questions[i].options.length; j++) {
      optionsHTML += `
        <label>
          <input type="radio" name="question${i}" value="${questions[i].options[j]}">
          ${questions[i].options[j]}
        </label><br>
      `;
    }
  
    document.getElementById("questions-container").innerHTML += `
      <div class="Questions-part">
        <h3>${questions[i].question}</h3>
        ${optionsHTML}
      </div>
    `;
  }

  document.getElementById("submit-btn").addEventListener("click", function () {
    window.location.href="./home.html"
  })