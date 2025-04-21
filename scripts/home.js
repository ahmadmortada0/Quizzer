let users = JSON.parse(localStorage.getItem("users"))
let name=localStorage.getItem("currentUserName")
document.getElementById("name").innerHTML= name
//go back function
document.getElementById("log-btn").addEventListener("click",function(){
    window.location.href="../index.html"
}

)
//generating cards on how much quizzes i have in a local storage 
let quiz =JSON.parse(localStorage.getItem("quizzes"))
for( let i = 0 ; i< quiz.length;i++){
    document.getElementById("cards-sections").innerHTML+=
        `<div class="card">
            <div class="class-info">
                    <h3 class=".poppins-thin">Quiz ${quiz[i].id}</h3>
                    <h1 class=".poppins-extralight">${quiz[i].title}</h1>
                    <p class=".poppins-extralight">${quiz[i].description}</p>
                </div>
                 <div class="flex cont-btn">
                    <button class="quiz-btn" id="${quiz[i].id}"> Do This Quiz </button>
                    </div>
                    </div>`
}
let btns=document.getElementsByClassName("quiz-btn")
console.log(btns.length)
//here each button has an id so each button send to the local storage the specific data for the quiz page to render the questions
for(let i = 0 ; i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        let selectQuiz = quiz[i]
        console.log(selectQuiz)
        localStorage.setItem("selected Quiz", JSON.stringify(selectQuiz));
        window.location.href="../pages/quiz.html"
    })
}
//typeWriter code down here
const titles=[]
for (let i = 0; i < quiz.length; i++) {
    titles.push(quiz[i].title)
}
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms))
}
const el = document.getElementById("typewriter");
let sleepTime=100;
let index=0;
const writeLoop=async ()=>{
    while(true){
        let word=titles[index]
        for (let i = 0; i < word.length; i++) {
            el.innerText=word.substring(0,i+1)
            await sleep(sleepTime)
      
            
        }
        await sleep (sleepTime*10)
        for (let i = word.length; i >0 ; i--) {
            el.innerText=word.substring(0,i-1)
            await sleep(sleepTime)
        }
        await sleep (sleepTime*5)
        if (index===titles.length-1){
            index=0
        }else{
            index++
        }
    }
};
writeLoop()
