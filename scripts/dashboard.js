let users= JSON.parse(localStorage.getItem("usersAndScores"))
console.log(users)
for (let i = 0; i < users.length; i++) {
  let id =0
    for (let j = 0; j < users[i].userScores.length; j++) {
         document.getElementById("table-id").innerHTML +=`
            <tr>
              <td class="">${users[i].username}</td>
              <td class="">${users[i].userEmail}</td>
              <td class="">${users[i].userScores[j].scoreTitle}</td>
              <td class="">${users[i].userScores[j].totalscore}</td>
            </tr>
`
id++;
}
if (id%2===0){
  let q = document.querySelectorAll("td")
  q.classList.add(".color")
}
}