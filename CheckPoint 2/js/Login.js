// Dùng DOM
const registerForm = document.querySelector('#register-form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

////////////////////////////////////////////////////////////////////// Đăng nhập 1 tải khoản có sẵn
login_btn.addEventListener("submit", function (e) {
    e.preventDefault();

  const username = username_login.value;
  const password = password_login.value;

  firebase.auth().signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const date = new Date();
      update(ref(database, "users/" + user.uid), {
        lastLogin: date,
      });

      localStorage.setItem("current_user_data", 
      JSON.stringify({
        user_email: username,
        user_uid: user.uid,
      })
      );
    })

    .then(() => {
      alert("Đăng nhập thành công");
      window.location.href="./home.html"
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});