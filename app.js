const container = document.getElementById("box")
const button = document.getElementById("setData")

const getData = async () => {
  const user = document.getElementById("users")
  const names = user.value
  const response = await fetch(`https://api.github.com/users/${names}`)
  const data = await response.json()

  const { name, bio, avatar_url, followers, following, public_repos, html_url } = data
  
  container.innerHTML =
    `
        <div>
          <img src="${avatar_url}" alt="avatar">
        </div>

        <div class="card-body">
          <h3>${name}</h3>
          <p>${bio}</p>
        </div>

        <div class="seguidores">
          <p>Followers<br>${followers}</p>
          <p>Following<br>${following}</p>
          <p>Repositories<br>${public_repos}</p>
        </div>

        <div class="github">
          <a class="fcc-btn" id="iconogit" href="${html_url}" target="_blank">
          <i class="fa-brands fa-github" id="icono"></i> GitHub</a>
        </div>   
    `
}

button.addEventListener('click', getData)