const postsContainer = document.querySelector('.post-container')

const renderPostList = (postList) => {
    if (postList) {

      let htmls = postList.map(postItem => {

        return `
        <div class="post-item mx-[5px] my-[20px] pl-[5px] w-full rounded-lg flex shadow-xl border-2 border-[black]">

          <div class="w-[1000px] p-[10px]">
            <h3 class="post-title text-center border-b-2">${postItem.name}</h3>
            <p>${postItem.description}</p>
          </div>

          <img src='${postItem.image_path}' width="50%" class="ml-[5px]">
        </div>
        `
      })
  
      console.log(htmls);
      postsContainer.innerHTML = htmls.join('')
    }
  }

  const handleGetPostList = () => {
    fetch('https://65ed29170ddee626c9b131c6.mockapi.io/api/v1/food')
      .then(data => {
        return data.json()
      })
      .then(posts => {
        console.log(posts);

        renderPostList(posts)
  
      })
      .catch(error => {
        console.warn(error)
      })
  }

  handleGetPostList()
  