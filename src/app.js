//fitur js
//-button scroll
//-github stats



// Variabel pemanggil
let mybutton = document.getElementById("myBtn");

// fungsi saat user scroll website 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// fungsi saat button di klik
function topFunction() {
  document.body.scrollTop = 0; // di safari
  document.documentElement.scrollTop = 0; // di chrome Firefox, IE dan opra
}
function myFunction() {
   var element = document.body;
   element.classList.toggle('dark-mode');
   
   
   
   
}
//fungsi dari github stats

//event
document.addEventListener('DOMContentLoaded', function () {
   
    // Ganti dengan username GitHub Anda
    const username = 'dimaskecee';

    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const githubStats = document.getElementById('github-stats');
            githubStats.innerHTML = `
                 <p><strong>Nama:</strong> ${data.name}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching GitHub API:', error);
        });
});