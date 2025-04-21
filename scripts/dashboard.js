let users= JSON.parse(localStorage.getItem("usersAndScores"))

let table = document.getElementById("table-id");
let rowId = 0;

for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < users[i].userScores.length; j++) {
    let row = document.createElement("tr");

    if (rowId % 2 === 0) {
      row.classList.add("color");
    }

    row.innerHTML = `
      <td class="name">${users[i].username}</td>
      <td class="email">${users[i].userEmail}</td>
      <td class="scoreT">${users[i].userScores[j].scoreTitle}</td>
      <td class="score">${users[i].userScores[j].totalscore}</td>
    `;

    table.appendChild(row);
    rowId++;
  }
}