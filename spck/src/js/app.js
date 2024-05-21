
// DOM

let user_data = JSON.parse(localStorage.getItem("current_user_data"));

let subList = document.getElementById("sub-list")
let subNav = document.getElementById("subnavout")
if (user_data) {
  subList.innerHTML =
    `
  <div class="sublist header-lr d-flex head-nav-item" id="dropdown">

  <p><span id="display-name"></span></p>
  <ul class="sub-nav" id="subnavout">
      <li>
          <a id="logout">Logout</a>
      </li>
  </ul>
</div>
  `;
  let displayNames = document.getElementById("display-name");
  // email
  displayNames.innerHTML = "E:" + " " + user_data.displayName;
} else {
  subList.innerHTML =
    `
  <div class="sublist header-lr d-flex head-nav-item" id="dropdown">
      <a href="./register.html" class="lr-butt items-center d-flex" style="width:auto;">
          <span>Register</Span>
      </a>
          <div class="lr-butt-h items-center d-flex center-lr">/</div>
      <a href="./login.html" class="lr-butt items-center d-flex" style="width:auto;">
          <span>Login</Span>
      </a>
  </div>
  `
}


