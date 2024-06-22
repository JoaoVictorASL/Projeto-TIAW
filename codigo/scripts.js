// scripts.js
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('d-none');
    menu.classList.toggle('d-flex');
}

var socialData
var userData
var repoData

fetch("https://api.github.com/users/JoaoVictorASL")
        .then(response => response.json())
        .then(data => {
            userData = data;
            
            document.getElementById("ft-perfil").src = userData.avatar_url
            document.getElementById("nome").innerHTML = userData.name
            document.getElementById("bio").innerHTML = userData.bio
            document.getElementById("endereco").innerHTML = userData.location
            document.getElementById("site").href = userData.html_url
        })
        
fetch("https://api.github.com/users/JoaoVictorASL/social_accounts")
        .then(response => response.json())
        .then(data => {
            let socialData = data;
    
            socialData.forEach(account => {
                if (account.provider === "instagram") {
                    document.getElementById("instagram").href = account.url;
                } else if (account.provider === "linkedin") {
                    document.getElementById("linkedin").href = account.url;
                }
            });
        })
        

fetch("/repositorio")
        .then(response => response.json())
        .then(data => {
            let repoData = data;
            console.log(repoData);
        })
        .catch(error => console.error('Error fetching data:', error));


