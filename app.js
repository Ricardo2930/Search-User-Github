const container = document.getElementById("box")
const button = document.getElementById("setData")

const getData = async () => {
  const user = document.getElementById("users")
  const names = user.value
  const response = await fetch(`https://api.github.com/users/${names}`)
  //console.log(response)
  const data = await response.json()
  //console.log(data)

  container.innerHTML = ""
  const { name, bio, avatar_url, followers, following, public_repos, html_url } = data
  container.innerHTML +=
    `
      <div class="card">
        <img src="${avatar_url}" alt="avatar">
        <div class="card-body">
          <h3>${name}</h3>
          <p>${bio}</p>
        </div>
        <div class="seguidores">
          <h5>Followers<br>${followers}</h5>
          <h5>Following<br>${following}</h5>
          <h5>Repositories<br>${public_repos}</h5>
        </div>
        <div class="github">
        <a class="fcc-btn" id="iconogit" href="${html_url}" target="_blank">
        <i class="fa-brands fa-github" id="icono"></i> 
        GitHub</a>
        </div>   
      </div>
    `
}

button.addEventListener('click', getData)