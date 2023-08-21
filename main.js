const addButton = document.getElementById('addButton');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const contactList = document.getElementById('contact-list');

addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const phone = phoneInput.value;

    if (name && phone) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${phone}</td>
          <td><button class="delete-button">Excluir</button></td>`;

        contactList.appendChild(newRow);

        nameInput.value = '';
        phoneInput.value = '';

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
          button.addEventListener('click', () => {
            const row = button.parentNode.parentNode;
            contactList.removeChild(row);
          });
        });
      }
    });
