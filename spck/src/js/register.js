
// DOM
const registerForm = document.querySelector("#register-form");
const fullnameIp = document.querySelector("#fullname")
const emailIp = document.querySelector("#email")
const passwordIp = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirm")

// Function
const handleRegister = (event) => {
    // Prevent from reloading pages
    event.preventDefault();
    // Get data
    const fullname = fullnameIp.value;
    const email = emailIp.value;
    const password = passwordIp.value;
    const passwordComfirm = passwordConfirm.value;

    // Validate
    if (!fullname || !email || !password || !passwordComfirm) {
        alert("Fill all field!");
        return;
    }

    if (password != passwordComfirm) {
        alert("Wrong confirm password!");
        return;
    }

    // Register script

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            
            let userSaveLS = {
                displayName: user.displayName,
                email: user.email,
              }

            //Post to localstorage
            localStorage.setItem("current_user_data", JSON.stringify(userSaveLS));
            // Alert and switch to log in page
            alert("Sign up successfully!")
        })
    // Save data into Firebase
    db.collection("users").add({
        displayName: fullname,
        email: email,
        password: password
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorCode + ": " + errorMessage);
        })
}

auth.onAuthStateChanged((user) => {
    if (!user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        registerForm.addEventListener("submit", handleRegister);
        // ...
    } else {
        // User is signed out
        // ...

        window.location.href = "index.html";
    }
});