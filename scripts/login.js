let form=document.getElementById("join-type")
let submitBtn=document.getElementById("link-page")
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
  document.getElementById('show-password').addEventListener("click",changeVisiblity)
  function changeVisiblity() {
    let check = document.getElementById("inPassword")
    let confirm=document.getElementById("confirm-in")
  if (check.type === "password") {
    check.type = "text";
    confirm.type = "text";
  } else {
    check.type = "password";
    confirm.type="password"
  }
}
  
  // users=[{}]
  // users.mail;
  // users.password;
 
 