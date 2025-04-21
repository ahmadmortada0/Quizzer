const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
let form=document.getElementById("join-type")
let submitBtn=document.getElementById("link-page")
document.getElementById("sgn-btn").addEventListener("click",signIn)
document.getElementById("lgn-btn").addEventListener("click",logIN)
let login= true
function logIN(){
     form.innerHTML="Login"
     document.getElementById("con-confirm-in").classList.add("invisible")
     document.getElementById("sgn-btn").classList.remove("active-btn")
      document.getElementById("lgn-btn").classList.add("active-btn")
     document.getElementById("con-in-name").classList.add("invisible")

    submitBtn.innerHTML="Login"
    login=true

}

function signIn(){
    form.innerHTML="Sign in"
    document.getElementById("sgn-btn").classList.add("active-btn")
    document.getElementById("lgn-btn").classList.remove("active-btn")
    document.getElementById("con-confirm-in").classList.remove("invisible")
    document.getElementById("con-in-name").classList.remove("invisible")
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
let username=""
let users = JSON.parse(localStorage.getItem("users")) || [];
function newUser(email,password,userName){
  let confirm=document.getElementById("confirm-in").value
  if (password !== confirm) {
    document.getElementById('hidden-mess').classList.add("invisible");
    document.getElementById('hidden-mess3').classList.add("invisible");
    document.getElementById("hidden-mess2").classList.remove("invisible");
    document.getElementById('hidden-mess4').classList.add("invisible");

    return;
  }
  if(users.length!==0){
    for (let i = 0; i < users.length; i++) {
      if (users[i].email===email) {
      document.getElementById('hidden-mess').classList.add("invisible");
      document.getElementById('hidden-mess2').classList.add("invisible");
      document.getElementById('hidden-mess3').classList.remove("invisible");
      document.getElementById('hidden-mess4').classList.add("invisible");

      return;
    }
    if(!emailPattern.test(email)){
      document.getElementById('hidden-mess').classList.add("invisible");
      document.getElementById('hidden-mess2').classList.add("invisible");
      document.getElementById('hidden-mess3').classList.add("invisible");
      document.getElementById('hidden-mess4').classList.remove("invisible");
      return ;
    }
  }
  }
  let newUser = {
    userName:userName,
    email: email,
    password: password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", email);
  localStorage.setItem("currentUserName", userName);
  window.location.href = "./pages/home.html";


}
 
function checkUser(email, password) {
  if (email === "admin@quiz.com" && password === "admin123") {
    localStorage.setItem("currentUser", "ADMIN");
    window.location.href = "./pages/dashboard.html";
    return;
  }
  let found = users.find(user => user.email === email && user.password === password);

  if (found) {
    localStorage.setItem("currentUser", email);
    window.location.href = "./pages/home.html";
  } else {
    document.getElementById('hidden-mess3').classList.add("invisible");
    document.getElementById('hidden-mess2').classList.add("invisible");
    document.getElementById("hidden-mess").classList.remove("invisible");
    document.getElementById('hidden-mess4').classList.add("invisible");

  }
}

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
   email=document.getElementById("inEmail").value
   password=document.getElementById("inPassword").value
   userName=document.getElementById("in-name").value
   if(login===true){
    checkUser(email,password)}
    else{
      newUser(email,password,userName)
    }
}
)








 