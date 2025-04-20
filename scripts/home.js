let users = JSON.parse(localStorage.getItem("users"))
let name=localStorage.getItem("currentUser")
document.getElementById("name").innerHTML= name

let quiz =JSON.parse(localStorage.getItem("quizzes"))
for( let i = 0 ; i< quiz.length;i++){
    document.getElementById("cards-sections").innerHTML+=
        `<div class="card">
            <div class="class-info">
                    <h3>Quiz ${quiz[i].id}</h3>
                    <h1>${quiz[i].title}</h1>
                    <p>${quiz[i].description}</p>
                </div>
                 <div class="flex cont-btn">
                    <button class="quiz-btn " id="${quiz[i].id}"> Do This Quiz </button>
                    </div>
                    </div>`
}
document.getElementById("log-btn").addEventListener("click",function(){
    window.location.href="../index.html"
})
document.querySelectorAll('.quiz-btn').forEach(button => {
    button.addEventListener('click', function () {
      const selectedQuiz = quiz;
  
      localStorage.setItem("selectedQuiz", JSON.stringify(selectedQuiz));
  
      window.location.href = "quiz.html";
    });
  });