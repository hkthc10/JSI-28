
// DOM

let user_data = JSON.parse(localStorage.getItem("current_user_data"));

let subList = document.getElementById("sub-list")
let subNav = document.getElementById("subnavout")
if (user_data) {
  subList.innerHTML =
    `
  <div class="sublist header-lr d-flex head-nav-item" id="dropdown">

  <p class="prevent-select"><span id="email"></span></p>
  <ul class="sub-nav" id="subnavout">
      <li>
          <a id="logout">Logout</a>
      </li>
      <li>
          <a id="edit" href="./upload-games.html">Edit</a>
      </li>
  </ul>
</div>
  `;
  let user_email_span = document.getElementById("email");
  // email
  user_email_span.innerText = "Email:" + " " + user_data;
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

function switchImages(color) {
  var darkC = document.getElementById('dark');
  var lightC = document.getElementById('light');

  // Select all elements on the page with class 'changeable' and 'reverse'
  var changeAble = document.querySelectorAll('.changeable');
  var colorReverse = document.querySelectorAll('.reverse');

  // Loop through each element with class 'changeable' and change its background color
  changeAble.forEach(function(element) {
      element.style.backgroundColor = color;
  });

  // Set the text color for elements with class 'reverse' based on the selected color
  colorReverse.forEach(function(element) {
      element.style.color = (color === 'black') ? 'white' : 'black';
  });

  // Store the selected color in localStorage
  localStorage.setItem('selectedColor', color);

  // Toggle image visibility based on the selected color
  if (lightC.style.display !== 'none') {
      darkC.style.display = 'block';
      lightC.style.display = 'none';
  } else {
      darkC.style.display = 'none';
      lightC.style.display = 'block';
  }
}

// Retrieve the selected color from localStorage
var selectedColor = localStorage.getItem('selectedColor');

// Set the colors based on the retrieved value
if (selectedColor) {
  switchImages(selectedColor);
} else {
  // If no color is saved in localStorage, set default colors
  switchImages('black'); // or 'white', or any other default color
}
