import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {
  get,
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
  push,
  child,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn6O28WR36fqshXNPCXr-iflmk9GVvQoI",
  authDomain: "mindx-jsi-ab5fb.firebaseapp.com",
  databaseURL: "https://mindx-jsi-ab5fb-default-rtdb.firebaseio.com",
  projectId: "mindx-jsi-ab5fb",
  storageBucket: "mindx-jsi-ab5fb.appspot.com",
  messagingSenderId: "190653651532",
  appId: "1:190653651532:web:bb172bd475346d579ef2e9",
  measurementId: "G-1TJ2H1XN26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// Dùng DOM
let username_login = document.getElementById("username_input_login");
let password_login = document.getElementById("password_input_login");
let username_register = document.getElementById("username_input_register");
let password_register = document.getElementById("password_input_register");
let login_btn = document.getElementById("login_btn");
let register_btn = document.getElementById("register_btn");

///////////////////////////////////////////////////////////////////// Đăng ký 1 tài khoản
register_btn.addEventListener("submit", function () {
  let username = username_register.value;
  let password = password_register.value;

  createUserWithEmailAndPassword(auth, username, password) // Check xem cái user này tồn tại chưa
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        username: username,
        password: password,
      });
    })
    .then(() => {
      alert("Tạo tài khoản thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});

////////////////////////////////////////////////////////////////////// Đăng nhập 1 tải khoản có sẵn
login_btn.addEventListener("submit", function () {
  let username = username_login.value;
  let password = password_login.value;

  signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      let date = new Date();
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