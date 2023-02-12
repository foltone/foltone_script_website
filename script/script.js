function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display != "block") {
        // Show menu
        menu.style.display = "block";
        // appearance animation
        menu.style.opacity = 0;
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menu.style.opacity = 1;
            menu.style.transform = "translateY(0)";
        } , 100);

    } else {
        menu.style.display = "none";
    }
}

document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
    const eye = document.querySelectorAll(".eyes");
    eye.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotate + "deg)";
    });
}

const data = [
    {
        name: "foltone ticket",
        vidéo: "5WvTWMpKUcM",
        github: "https://github.com/foltone/foltone_ticket",
        cfx: "https://forum.cfx.re/t/free-standalone-ticket-system-rageui-fr-en-es/5009680"
    },
    {
        name: "foltone ped meca",
        vidéo: "-EGvdVIrkLk",
        github: "https://github.com/foltone/foltone_ped_meca",
        cfx: "https://forum.cfx.re/t/free-nui-automatic-ped-mechanic-fr-en-es/4994016"
    },
    {
        name: "foltone drugs",
        vidéo: "bW3_jxIvShQ",
        github: "https://github.com/foltone/foltone_drugs"
    },
    {
        name: "foltone bot",
        vidéo: "bEadR2IkGYU",
        github: "https://github.com/foltone/foltone_bot"
    },
    {
        name: "foltone distributeur",
        vidéo: "d_H2Se9NwGI",
        github: "https://github.com/foltone/foltone_distributeur"
    },
    {
        name: "foltone accessories",
        vidéo: "YdjPtrOVNr8",
        github: "https://github.com/foltone/foltone_accessories"
    },
    {
        name: "foltone clothes",
        vidéo: "YdjPtrOVNr8",
        github: "https://github.com/foltone/foltone_clothes"
    },
    {
        name: "foltone template",
        vidéo: "J3D7ad_v1B0",
        github: "https://github.com/foltone/foltone_template"
    },
    {
        name: "foltone keys",
        vidéo: "lZMfPSfP-qo",
        github: "https://github.com/foltone/foltone_keys"
    },
    {
        name: "foltone f5",
        vidéo: "D16ODqkkInA",
        github: "https://github.com/foltone/foltone_f5"
    },
    {
        name: "foltone ambulance job",
        vidéo: "gIH_8Y3PxqU",
        github: "https://github.com/foltone/foltone_ambulance_job"
    },
    {
        name: "foltone pack shops",
        vidéo: "whDHVl6aW48",
        github: "https://github.com/foltone/foltone_pack_shops"
    },
    {
        name: "folltone zone safe",
        vidéo: "R1hPkNakpkU",
        github: "https://github.com/foltone/foltone_zone_safe"
    }

]

const scripts = document.getElementById("grid-scripts");

for (const item of data) {
    const div = document.createElement("div");
    div.classList.add("script");
    if (item.cfx) {
        div.innerHTML = `
        <h1>${item.name}</h1>
        <iframe src="https://www.youtube.com/embed/${item.vidéo}" frameborder="0">></iframe>
        <div class="list-btn">
            <a target="_blank" href="${item.github}" class="btn"><img src="img/fivem.png">Post</a>
            <a target="_blank" href="${item.github}" class="btn"><img src="img/github.png">Repository</a>
            <a target="_blank" href="${item.github}/archive/refs/heads/main.zip" class="btn"><img src="img/download.png">Download</a>
        </div>
        `;
    } else {
        div.innerHTML = `
        <h1>${item.name}</h1>
        <iframe src="https://www.youtube.com/embed/${item.vidéo}" frameborder="0">></iframe>
        <div class="list-btn">
            <a target="_blank" href="${item.github}" class="btn"><img src="img/github.png">Repository</a>
            <a target="_blank" href="${item.github}/archive/refs/heads/main.zip" class="btn"><img src="img/download.png">Download</a>
        </div>
        `;
    }
    scripts.appendChild(div);
}
