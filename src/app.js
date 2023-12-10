// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function myFunction() {
   var element = document.body;
   element.classList.toggle('dark-mode');
   
   
   
   
}

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