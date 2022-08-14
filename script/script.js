const chk = document.getElementById('chk');
const loader = document.querySelector('.loader');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

function save() {
  localStorage.setItem("chk", chk.checked);
}

var checked = JSON.parse(localStorage.getItem("chk"));
document.getElementById("chk").checked = checked;

window.addEventListener("load", function() {
  loader.classList.add('fondu-out');
  if (checked) {
    document.body.classList.toggle('dark');
  }
});

function scriptTemplate(script) {
  return `
    <div class="grid-item">
          <p>${script.name}</p>
          <iframe src="https://www.youtube.com/embed/${script.vidéo}" frameborder="0"></iframe>
          <div class="buttons">
          <a href="${script.github}/archive/refs/heads/main.zip" target="_blank" class="bt-download"><i class="fa fa-download"></i>Download</a>
          <a href="${script.github}" target="_blank" class="bt-repositorie"><i class="fa fa-github"></i>Repositorie</a>
          </div>
      </div>
  `;
}

var requestURL = 'https://foltone.github.io/foltone_script_website/json/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var superHeroes = request.response
  document.getElementById("grid-container").innerHTML = `${superHeroes.map(scriptTemplate).join("")}`;
}