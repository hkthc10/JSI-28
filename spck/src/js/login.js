// Dùng DOM
const loginForm = document.querySelector(".login-form");
let username_login = document.getElementById("email");
let password_login = document.getElementById("password");
let login_btn = document.getElementById("login_btn");

let userList = JSON.parse(localStorage.getItem('user-list'));

////////////////////////////////////////////////////////////////////// Đăng nhập 1 tải khoản có sẵn
const handleLogin = (event) => {

  event.preventDefault();

  let username = username_login.value;
  let password = password_login.value;

  firebase.auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
      const user = userCredential.user;

      localStorage.setItem("current_user_data",
        JSON.stringify({
          user_email: username
        })
      );
    })

    .then(() => {
      localStorage.setItem("current-signin-account", JSON.stringify(username));
      alert("Đăng nhập thành công");
      window.location.pathname = "spck/home.html";
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorCode + ": " + errorMessage);
  });
}

loginForm.addEventListener("submit", (event) => {
  handleLogin(event);
})