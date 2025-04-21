const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
let form=document.getElementById("join-type")
let submitBtn=document.getElementById("link-page")
document.getElementById("sgn-btn").addEventListener("click",signIn)
document.getElementById("lgn-btn").addEventListener("click",logIN)
let login= true







 //a function that change the form value and make some inputs hidden
function logIN(){
  form.innerHTML="Login"
  document.getElementById("con-confirm-in").classList.add("invisible")
  document.getElementById("sgn-btn").classList.remove("active-btn")
   document.getElementById("lgn-btn").classList.add("active-btn")
  document.getElementById("con-in-name").classList.add("invisible")

 submitBtn.innerHTML="Login"
 login=true

}

//a function that change the form value and make some inputs visible

function signIn(){
  form.innerHTML="Sign in"
  document.getElementById("sgn-btn").classList.add("active-btn")
  document.getElementById("lgn-btn").classList.remove("active-btn")
  document.getElementById("con-confirm-in").classList.remove("invisible")
  document.getElementById("con-in-name").classList.remove("invisible")
  submitBtn.innerHTML="Sign in"
  login=false
}