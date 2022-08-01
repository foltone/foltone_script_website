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
          ${script.name}
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${script.vidéo}" frameborder="0">
          </iframe>
          <a href="${script.github}/archive/refs/heads/main.zip">
              <button class="button-telecharger">
                  <i class="fa fa-download"></i>
                  Téléharger
              </button>
          </a>
          <a href="${script.github}" target="_blank">
              <button class="button-repositorie">
                  <i class="fa fa-github"></i>
                  Repositorie
              </button>
          </a>
      </div>
  `;
}

document.getElementById("app").innerHTML = `
  ${scriptData.map(scriptTemplate).join("")}
`;