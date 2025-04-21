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
//a function that change the type of the password input

  document.getElementById('show-password').addEventListener("mousedown",()=>{
    let check = document.getElementById("inPassword")
    let confirm=document.getElementById("confirm-in")
    check.type = "text";
    confirm.type = "text";
    
  })
  document.getElementById('show-password').addEventListener("mouseup",()=>{
        let check = document.getElementById("inPassword")
    let confirm=document.getElementById("confirm-in")
    check.type = "password";
    confirm.type="password"
  })
  // document.getElementById('show-password').addEventListener("mouseup",changeVisiblity)
//   function changeVisiblity() {
//     let check = document.getElementById("inPassword")
//     let confirm=document.getElementById("confirm-in")
//   if (check.type === "password") {
//     check.type = "text";
//     confirm.type = "text";
//   } else {
//     check.type = "password";
//     confirm.type="password"
//   }
// }
function showMessage(id) {
  ['hidden-mess', 'hidden-mess2', 'hidden-mess3', 'hidden-mess4'].forEach(msg => {
    document.getElementById(msg).classList.add("invisible");
  });
  document.getElementById(id).classList.remove("invisible");
}
let email=""
let password=""
let username=""
let users = JSON.parse(localStorage.getItem("users")) || [];//intialising the key of this data to avoid problems 
//to check and create a new user and store the data to local storage
function newUser(email,password,userName){
  let confirm=document.getElementById("confirm-in").value
    //checking if password is = to confirm password

  if (password !== confirm) {
    showMessage("hidden-mess2")
    return;
  }
    //checking if email is alerady registered by getting data from the local storage

  if(users.length!==0){
    for (let i = 0; i < users.length; i++) {
      if (users[i].email===email||email==="admin@quiz.com") {
        showMessage("hidden-mess3")
      return;
    }
    //checking if email is valid
    if(!emailPattern.test(email)){
      showMessage("hidden-mess4")
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
 //this is a hardcoded function for the admin page
function checkUser(email, password) {
  if (email === "admin@quiz.com" && password === "admin123") {
    localStorage.setItem("currentUser", "ADMIN");
    window.location.href = "./pages/dashboard.html";
    return;
  }
  let found = users.find(user => user.email === email && user.password === password);//this block of code search in the local storage if theres is a user with same email and password to log in

  if (found) {
    localStorage.setItem("currentUser", email);
    window.location.href = "./pages/home.html";
  } else {        showMessage("hidden-mess");

  }
}

document.getElementById("submit-btn").addEventListener("click", function () {
   email=document.getElementById("inEmail").value
   email=email.toLowerCase()
   password=document.getElementById("inPassword").value
   userName=document.getElementById("in-name").value
   if(login){
    checkUser(email,password)}
    else{
      newUser(email,password,userName)
    }
}
)








 