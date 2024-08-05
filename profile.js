document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.getElementById('edit-btn');
    const saveButton = document.getElementById('save-btn');
    const profileDiv = document.querySelector('.profile');

    editButton.addEventListener('click', function() {
        profileDiv.classList.add('edit-mode');
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', function() {
        profileDiv.classList.remove('edit-mode');

        document.getElementById('name').innerText = document.getElementById('name-input').value;
        document.getElementById('email').innerText = document.getElementById('email-input').value;
        document.getElementById('interests').innerText = document.getElementById('interests-input').value;

        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
    });
});
