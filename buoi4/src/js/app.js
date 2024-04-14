// 2 cách khai báo hàm
// cach 1: function tenHam(tham_so) { code xu ly}

// cách 2 Arrow function: Trong TH hàm có 1 thamn số thì có thể bỏ cặp dấu ()
//  const tenHam = (tham_so) => { code xu ly }

// DOM
const postsContainer = document.querySelector('.posts-container');
const postForm = document.querySelector('#post-form');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const imagePathInput = document.querySelector('#image-path');


const renderPostList = (postList) => { // postList mảng các post
  if (postList) {
    // postList.map(function (postItem) {

    // })
    let htmls = postList.map(postItem => {
      // literial string
      return `
      <div class="post-item m-[12px] w-full rounded-lg flex">
        <div class="w-1/2">
        <h3 class="post-title">${postItem.title}</h3>
        <p>${postItem.content}</p>
        </div>
        <img src='${postItem.image_path}'>
      </div>
      `
    })

    console.log(htmls);
    postsContainer.innerHTML = htmls.join('')
  }
}

const handleGetPostList = () => {
  fetch('https://65ed29170ddee626c9b131c6.mockapi.io/api/v1/posts')
    .then(data => {
      return data.json()
    })
    .then(posts => {
      console.log(posts);

      // render posts
      renderPostList(posts)

    })
    .catch(error => {
      console.warn(error)
    })
}

handleGetPostList()

//Hàm gửi dũ liệu lên server
//Phương thức :Post
//1 request với phương thức post thì sẽ có thành phần là body để chứa dữ liệu cần đẩy lên
const handlePushData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin: 
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    // headers: {
    //   "Content-Type": "application/json",
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })

  return response.json();
}

const addPost = (event) => {
  event.preventDefault()

  let title = titleInput.value
  let content = contentInput.value
  let imagePath = imagePathInput.value

  let post = {
    title,
    content,
    imagePath
  }

  handlePushData("https://65ed29170ddee626c9b131c6.mockapi.io/api/v1/posts", post).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

postForm.addEventListener("submit", function(event) {
  addPost(event)
})

handleGetPostList() 