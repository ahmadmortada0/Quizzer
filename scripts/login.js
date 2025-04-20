let form=document.getElementById("join-type")
let submitBtn=document.getElementById("link-page")
document.getElementById("sgn-btn").addEventListener("click",signIn)
document.getElementById("lgn-btn").addEventListener("click",logIN)
let login= true
function logIN(){
     form.innerHTML="Login"
     document.getElementById("confirm-in").classList.add("invisible")
     document.getElementById("sgn-btn").classList.remove("active-btn")
      document.getElementById("lgn-btn").classList.add("active-btn")
     document.getElementById("in-name").classList.add("invisible")

    submitBtn.innerHTML="Login"
    login=true

}

function signIn(){
    form.innerHTML="Sign in"
    document.getElementById("sgn-btn").classList.add("active-btn")
    document.getElementById("lgn-btn").classList.remove("active-btn")
    document.getElementById("confirm-in").classList.remove("invisible")
    document.getElementById("in-name").classList.remove("invisible")
    submitBtn.innerHTML="Sign in"
    login=false
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

let email=""
let password=""
let users = JSON.parse(localStorage.getItem("users"))
function newUser(email,password){
  let confirm=document.getElementById("confirm-in").value
  if (password !== confirm) {
    document.getElementById('hidden-mess').classList.add("invisible");
    document.getElementById('hidden-mess3').classList.add("invisible");
    document.getElementById("hidden-mess2").classList.remove("invisible");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(user => user.email === email);
  if (exists) {
    document.getElementById('hidden-mess').classList.add("invisible");
    document.getElementById('hidden-mess2').classList.add("invisible");
    document.getElementById('hidden-mess3').classList.remove("invisible");
    return;
  }

  let newUser = {
    email: email,
    password: password,
    scores: {} 
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", email);
  window.location.href = "./pages/home.html";

}
 
function checkUser(email, password) {
  if (email === "admin@quiz.com" && password === "admin123") {
    localStorage.setItem("currentUser", "admin@quiz.com");
    window.location.href = "./pages/dashboard.html";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find(user => user.email === email && user.password === password);

  if (found) {
    localStorage.setItem("currentUser", email);
    window.location.href = "./pages/home.html";
  } else {
    document.getElementById('hidden-mess3').classList.add("invisible");
    document.getElementById('hidden-mess2').classList.add("invisible");
    document.getElementById("hidden-mess").classList.remove("invisible");
  }
}

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
   email=document.getElementById("inEmail").value
   password=document.getElementById("inPassword").value
   if(login===true){
    checkUser(email,password)}
    else{
      newUser(email,password)
    }
}
)








 