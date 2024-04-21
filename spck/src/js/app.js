
// DOM
let user_data = localStorage.getItem("current_user_data");
let user_email_span = document.getElementById("email");

if (user_data == "") {
  user_email_span.innerText = "Chưa có";
} else {
  user_data = JSON.parse(user_data);
  // email
  user_email_span.innerText = user_data.user_email;
}

let sign_btn = document.querySelector("button");

sign_btn.addEventListener("click", function () {
  localStorage.setItem("current_user_data", "");
  window.location.reload();
});
