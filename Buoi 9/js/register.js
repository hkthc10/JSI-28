// DOM
const registerForm = document.querySelector("#register-form");
const fullname = document.querySelector("#fullname")
const email = document.querySelector("#email")
const dob = document.querySelector("#dob")
const password = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirm")
// Function
const handleRegister = (event) => {
    // Prevent from reloading pages
    event.preventDefault();
    // Get data
    let fullNameData = fullname.value;
    let emailData = email.value;
    let dobData = dob.value;
    let passwordData = password.value;
    let passwordConfirmData = passwordConfirm.value;

    // Validate
    if (!fullNameData || !emailData || !dobData || !passwordData || !passwordConfirmData) {
        alert("Fill all field!");
        return;
    }

    if (passwordData != passwordConfirmData) {
        alert("Wrong confirm password!");
        return;
    }

    // Register script

    firebase.auth().createUserWithEmailAndPassword(emailData, passwordData)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            // Save data into Firebase
            db.collection("users")
                .add({
                    fullNameData,
                    emailData,
                    dobData,
                    passwordData,
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            // Alert and switch to log in page
            alert("Sign up successfully!");
            window.location.pathname = "Checkpoint 2/login.html";
            return ;
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorCode + ": " + errorMessage);
        });
}
// Main script

registerForm.addEventListener("submit", (event) => {
    handleRegister(event);
})