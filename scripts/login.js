let form=document.getElementById("join-type")
let submitBtn=document.getElementById("submit-btn")
document.getElementById("sgn-btn").addEventListener("click",signIn)
document.getElementById("lgn-btn").addEventListener("click",logIN)
function logIN(){
     form.innerHTML="Login"
     document.getElementById("confirm-in").classList.add("invisible")
     document.getElementById("sgn-btn").classList.remove("active-btn")
    document.getElementById("lgn-btn").classList.add("active-btn")
    submitBtn.innerHTML="Login"
}

function signIn(){
    form.innerHTML="Sign in"
    document.getElementById("sgn-btn").classList.add("active-btn")
    document.getElementById("lgn-btn").classList.remove("active-btn")
    document.getElementById("confirm-in").classList.remove("invisible")
    submitBtn.innerHTML="Sign in"
  }