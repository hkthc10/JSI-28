const registerForm = document.querySelector('#register-form')
const fullname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const dob = document.querySelector('#dob')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')

const handleRegister = () => {
    const fullname = fullname.value;
    const email = email.value;
    const dob = dob.value;
    const password = password.value;
    const passwordConfirm = passwordConfirm.value;


if (!fullname || !email || !dob || !password || !passwordConfirm) {
    alert("Please fill all fields!");
    return;
};

if (password !== passwordConfirm) {
    alert("Please fill all fields!");
    return;
};



const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const fullname = fullname.value;
    const email = email.value;
    const dob = dob.value;
    const password = password.value;
    const passwordConfirm = passwordConfirm.value;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })}
  