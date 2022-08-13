const scriptData = [
  {
    name: "foltone distributeur",
    vidéo: "d_H2Se9NwGI",
    github: "https://github.com/foltone/foltone_distributeur",
  },
  {
    name: "foltone accessories",
    vidéo: "YdjPtrOVNr8",
    github: "https://github.com/foltone/foltone_accessories",
  },
  {
    name: "foltone clothes",
    vidéo: "YdjPtrOVNr8",
    github: "https://github.com/foltone/foltone_clothes",
  },
  {
    name: "foltone template",
    vidéo: "J3D7ad_v1B0",
    github: "https://github.com/foltone/foltone_template",
  },
  {
    name: "foltone keys",
    vidéo: "lZMfPSfP-qo",
    github: "https://github.com/foltone/foltone_keys",
  },
  {
    name: "foltone f5",
    vidéo: "D16ODqkkInA",
    github: "https://github.com/foltone/foltone_f5",
  },
  {
    name: "foltone ambulance job",
    vidéo: "gIH_8Y3PxqU",
    github: "https://github.com/foltone/foltone_ambulance_job",
  },
  {
    name: "foltone pack shops",
    vidéo: "whDHVl6aW48",
    github: "https://github.com/foltone/foltone_pack_shops",
  },
  {
    name: "folltone zone safe",
    vidéo: "R1hPkNakpkU",
    github: "https://github.com/foltone/foltone_zone_safe",
  },
];

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

document.getElementById("grid-container").innerHTML = `${scriptData.map(scriptTemplate).join("")}`;