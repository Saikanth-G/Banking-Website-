const firebaseConfig = {
    apiKey: "AIzaSyCx0m7CgsPnFnkHQGg1J2Py8XzegRIrW8s",
    authDomain: "login-details-c5b1e.firebaseapp.com",
    databaseURL: "https://login-details-c5b1e-default-rtdb.firebaseio.com",
    projectId: "login-details-c5b1e",
    storageBucket: "login-details-c5b1e.firebasestorage.app",
    messagingSenderId: "327571431096",
    appId: "1:327571431096:web:a587b786f3c8db1c145e4d"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var LoginDetailsDB = firebase.database().ref('LoginDetails');

document.getElementById("registerForm").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var email = getElementVal('email');
    var password = getElementVal('password');
    
    saveMessage(email, password);

    // enable alert
    document.getElementById("AlertMessage").style.display = "block";

    // remove the alert
    setTimeout(() => { 
        document.querySelector("#AlertMessage").style.display = "none";
    }, 3000) ;

    // reset the form
    document.getElementById("registerForm").reset();
}

const saveMessage = (email, password) => {
    var LoginForm = LoginDetailsDB.push();
    LoginForm.set({
        email: email,
        password: password
    })
    
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

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
