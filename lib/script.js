var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var listContainer = document.querySelector(".list-container");

menuIcon.onclick = function() {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
}

fetch('lib/videos.js')
  .then(response => response.json())
  .then(response => {
    renderVideos(response);
});

function renderVideos(res) {
  listContainer.innerHTML = '';
  for (var i = 0; i < res.length; i++) {
    listContainer.innerHTML += `<div class="vid-list">
                <a href="watch?id=${res[i].id}">
                    <video src="${res[i].url}" class="thumbnail"></video>
                </a>
                <div class="flex-div">
                    <img src="images/user.png">
                    <div class="vid-info">
                        <a href="watch?id=${res[i].id}">${res[i].title}</a>
                        <p></p>
                        <p>${res[i].date}</p>
                    </div>
                </div>
            </div>`;
  }
}
