let users= JSON.parse(localStorage.getItem("usersAndScores"))
console.log(users)
for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].userScores.length; j++) {
         document.getElementById("table-id").innerHTML +=`
            <tr>
              <td>${users[i].username}</td>
              <td>${users[i].userEmail}</td>
              <td>${users[i].userScores[j].scoreTitle}</td>
              <td>${users[i].userScores[j].totalscore}</td>
            </tr>
`
}
}