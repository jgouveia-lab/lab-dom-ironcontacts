// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

function createRow(contact) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  // ITERATION 2 - Delete Buttons
  row.querySelector(".btn-delete").addEventListener("click", () => row.remove());

  // ITERATION 3 - Like Buttons
  row.querySelector(".btn-like").addEventListener("click", () => {
    row.querySelector(".btn-like").classList.toggle("selected");
  });

  return row;
}

// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => tableBody.appendChild(createRow(contact)));


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIdx = Math.floor(Math.random() * contacts.length);
  tableBody.appendChild(createRow(contacts[randomIdx]));
});
