let selectedQuiz= JSON.parse(localStorage.getItem("selected Quiz"))
let currentUser=localStorage.getItem("currentUser")
let questions=selectedQuiz.questions
let user={}
let users=JSON.parse(localStorage.getItem("users"))
console.log(users)
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
          <input class= "input-choice" type="radio" name="question${i}" value="${questions[i].options[j]}">
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
    let scoreNum=0
    let total=0
   
    let choices = document.getElementsByClassName("input-choice")
    for (let i = 0; i < questions.length; i++) {
        total++
        for (let y = 0; y < questions[i].options.length; y++) {
            if(choices[i].value===questions[i].options[y]){
                console.log(choices)
                scoreNum+=1
            }
        }
    console.log(choices)
    }
    let userScores = {
        scoreTitle: selectedQuiz.title,
        totalscore: scoreNum,
      };
      
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === currentUser) {
          user=users[i] ;
          break;
        }
      }
      console.log(user)
      let userAndScore={
        username:user.userName,
        userEmail:user.email,
        userScores:userScores,
      }

      document.getElementById("score-container").classList.remove("hidden")
      document.getElementById("score-container").innerHTML=`
 <p>Your result ${scoreNum}/${questions.length}</p>
 `
    //   console.log(userAndScore)
    //   alert(userAndScore)
 
      localStorage.setItem("usersAndScores", JSON.stringify(userAndScore));
      
    console.log(scoreNum)
    console.log(total)
    
 })
 document.getElementById("go-button").addEventListener("click",function(){
    window.location.href="./home.html"
 })
 
 