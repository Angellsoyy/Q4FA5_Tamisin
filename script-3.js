let contactsList = [];

document.getElementById('addButton').addEventListener('click', addContact);
document.getElementById('removeButton').addEventListener('click', removeContact);

function addContact() {
    const contactInput = document.getElementById('contactInput');
    const contactName = contactInput.value.trim();

    if (contactName) {
        if (contactsList.length === 7) {
            contactsList.shift(); // Remove the first element if the list already has 7 contacts
        }
        contactsList.push(contactName);
        contactInput.value = ''; // Clear the input field
        updateContactsDisplay();
    }
}

function removeContact() {
    contactsList.pop(); // Remove the last element
    updateContactsDisplay();
}

function updateContactsDisplay() {
    const contactsContainer = document.getElementById('contactsContainer');
    contactsContainer.innerHTML = contactsList.join(' ');
}
