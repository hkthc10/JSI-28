function switchImages(color) {
  var darkC = document.getElementById('dark');
  var lightC = document.getElementById('light');

  var logoDark = document.querySelector('.dark');
  var logoLight = document.querySelector('.light');

  // Select all elements on the page with class 'changeable' and 'reverse'
  var changeAble = document.querySelectorAll('.changeable');
  var colorReverse = document.querySelectorAll('.reverse');
  var bgChangeAble = document.querySelectorAll('.bg-changeable');
  var bgColorReverse = document.querySelectorAll('.bg-reverse');
  var headerChange = document.querySelectorAll('.h-change');
  var mainChange = document.querySelectorAll('.m-change')
  var footerChange = document.querySelectorAll('.f-change');

  if (color === "white") {
    // Set the text color for elements with class 'reverse' based on the selected color
    colorReverse.forEach(function (element) {
      element.style.color = 'black';
    });

    bgColorReverse.forEach(function (element) {
      element.style.backgroundColor = 'black';
    });
  } else {
    // Set the text color for elements with class 'reverse' based on the selected color
    colorReverse.forEach(function (element) {
      element.style.color = 'white';
    });

    bgColorReverse.forEach(function (element) {
      element.style.backgroundColor = 'white';
    });
  }

  if (color === "black") {
    // Loop through each element with class 'changeable' and change its background color
    changeAble.forEach(function (element) {
      element.style.color = "white";
    });

    mainChange.forEach(function (element) {
      element.style.backgroundColor = 'black';
    });

    bgChangeAble.forEach(function (element) {
      element.style.backgroundColor = "rgb(86, 86, 86)";
    });
  } else {
    // Loop through each element with class 'changeable' and change its background color
    changeAble.forEach(function (element) {
      element.style.color = "black";
    });

    mainChange.forEach(function (element) {
      element.style.backgroundColor = 'white';
    });

    bgChangeAble.forEach(function (element) {
      element.style.backgroundColor = "rgb(223, 243, 251)";
    });
  }

  // Set the text color for elements with class 'reverse' based on the selected color
  colorReverse.forEach(function (element) {
    element.style.color = (color === 'white') ? 'black' : 'white';
  });

  bgColorReverse.forEach(function (element) {
    element.style.backgroundColor = (color === 'white') ? 'black' : 'white';
  });

  if (color === 'white') {
    headerChange.forEach(function (element) {
      element.style.backgroundColor = 'rgb(160, 203, 255)';
    });
    footerChange.forEach(function (element) {
      element.style.backgroundColor = 'rgb(255, 244, 183)';
    });
  } else {
    headerChange.forEach(function (element) {
      element.style.backgroundColor = 'rgb(197, 197, 197)';
    });
    footerChange.forEach(function (element) {
      element.style.backgroundColor = 'rgb(99, 108, 124)';
    });
  }

  // Store the selected color in localStorage
  localStorage.setItem('selectedColor', color);

  // Toggle image visibility based on the selected color
  if (color === 'black') {
    darkC.style.display = 'block';
    lightC.style.display = 'none';
    logoDark.style.display = 'block';
    logoLight.style.display = 'none';
  } else {
    darkC.style.display = 'none';
    lightC.style.display = 'block';
    logoDark.style.display = 'none';
    logoLight.style.display = 'block';
  };

  // Intro
  const introDark = document.querySelector('.idark');
  const introLight = document.querySelector('.ilight');
  if (introDark) {
    if (color === 'white') {
      introDark.style.display = 'block';
      introLight.style.display = 'none';
    } else {
      introDark.style.display = 'none';
      introLight.style.display = 'block';
    };
  }

  // Menu
  var menuDark = document.getElementById('menu-dark');
  var menuLight = document.getElementById('menu-light');
  if (menuDark) {
    if (color === 'black') {
      menuDark.style.display = 'block';
      menuLight.style.display = 'none';
    } else {
      menuDark.style.display = 'none';
      menuLight.style.display = 'block';
    };
  }

}

// Retrieve the selected color from localStorage
var selectedColor = localStorage.getItem('selectedColor');

// Chuyển chế độ thông qua localstorage
if (selectedColor) {
  switchImages(selectedColor);
} else {
  // Đặt chế độ mặc định khi không có selectedColor
  switchImages('white');
}

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