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
                    <button class="quiz-btn" id="${quiz[i].id}"> Do This Quiz </button>
                    </div>
                    </div>`
}
let btns=document.getElementsByClassName("quiz-btn")
console.log(btns.length)
for(let i = 0 ; i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        let selectQuiz = quiz[i]
        console.log(selectQuiz)
        localStorage.setItem("selected Quiz", JSON.stringify(selectQuiz));
        window.location.href="../pages/quiz.html"
    })
}
