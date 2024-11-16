const div = document.querySelector ("#container");
const input = document.querySelector ("#input");
const btn = document.querySelector ("#button");


btn.addEventListener ("click" , function getAccount () {

    let data = fetch (`https://api.github.com/users/${input.value}`)

    data.then ((res) => {
        if (!res.ok) {
            console.error(error);
        }
        return res.json();
    })

    .then ((res) => {
        div.innerHTML += `
        <div class="image">
            <img width="300px" src="${res.avatar_url}" alt="image">
        </div>
        <div class="about-account">
            <h3>Name: ${res.name}</h3>
            <h3>Username: ${res.login}</h3>
            <h3>Bio: ${res.bio}</h3>
            <h3>ID: ${res.id}</h3>
            <h3>Followers: ${res.followers}</h3>
            <h3>Following: ${res.following}</h3>
            <h3>Company:${res.company}</h3>
            <h3>Repositories: ${res.public_repos}</h3>
        </div>`;
    })

    .catch (() => {
        div.innerHTML += `<div class="user"> User Not Found? </div>`;
    });

    input.value = "";
    div.innerHTML = "";
})