let selectedQuiz= JSON.parse(localStorage.getItem("selected Quiz"))
let currentUser=localStorage.getItem("currentUser")
let questions=selectedQuiz.questions
let user={}
let users=JSON.parse(localStorage.getItem("users"))
let usersAndScores = JSON.parse(localStorage.getItem("usersAndScores")) || [];
let userScores=[]
// console.log(users)
function searchUser(){
    for (let i = 0; i < users.length; i++) {
    if(users[i].email===currentUser)
        user=users[i]
    }
}
searchUser()
document.getElementById("quiz-title").innerHTML=selectedQuiz.title
document.getElementById("quiz-dec").innerHTML=selectedQuiz.description
for (let i = 0; i < questions.length; i++) {
    let optionsHTML = "";
  
    for (let j = 0; j < questions[i].options.length; j++) {
      optionsHTML += `
        <label>
          <input class= "input-choice" type="radio" name="question${i}" value=${questions[i].options[j]}>
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
    let scoreNum = 0;
    let total = questions.length;
  
    for (let i = 0; i < total; i++) {
      let selected = document.querySelector(`input[name="question${i}"]:checked`);
      console.log(selected)
      console.log(selected.value)
      console.log(questions[i].options[questions[i].correct])
      if (selected && selected.value === questions[i].options[questions[i].correct]) {
        scoreNum += 1;
      }
    }
    let userScore = {
        scoreTitle: selectedQuiz.title,
        totalscore: scoreNum,
      };
    
    userScores.push(userScore)
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === currentUser) {
          user=users[i] ;
          break;
        }
      }
    //   console.log(user)
      let userAndScore={
        username:user.userName,
        userEmail:user.email,
        userScores:userScores,
      }
      usersAndScores.push(userAndScore)

      document.getElementById("score-container").classList.remove("hidden")
      document.getElementById("score-container").innerHTML=`
 <p id="score-bar" class="">Your result ${scoreNum}/${questions.length}</p>
 `
    //   console.log(userAndScore)
    //   alert(userAndScore)
 
    
      
    // console.log(scoreNum)
    // console.log(total)
    localStorage.setItem("usersAndScores", JSON.stringify(usersAndScores));
})
 document.getElementById("go-button").addEventListener("click",function(){
    window.location.href="./home.html"
 })
 
