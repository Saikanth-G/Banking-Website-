document.addEventListener('DOMContentLoaded', () => {
    const registerModal = document.getElementById('registerModal');
    const closeModalBtn = document.querySelector('.close-btn');
    const registerButtons = document.querySelectorAll('#registerBtnNav, #registerBtnHeader');

    // Show the modal when any register button is clicked
    registerButtons.forEach(button => {
        button.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
