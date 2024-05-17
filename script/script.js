function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display !== "block") {
        // Show menu
        menu.style.display = "block";
        // appearance animation
        menu.style.opacity = 0;
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menu.style.opacity = 1;
            menu.style.transform = "translateY(0)";
        }, 100);
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
        name: "Base template updated",
        vidéo: "y1A8_mHQ4bo",
        github: "https://github.com/foltone/foltone_template"
    },
    {
        name: "Gruppe6 Robbery and Job",
        vidéo: "oiSyG19OKUs",
        cfx: "https://forum.cfx.re/t/gruppe6-robbery-and-job-esx-qbcore-standalone-0-00ms-rageui/5233541",
        tebex: "https://foltone-store.tebex.io/package/6264494"
    },
    {
        name: "Personal menu",
        vidéo: "6nLM4hNjchM",
        github: "https://github.com/foltone/foltone_f5",
    },
    {
        name: "Vehicle lock",
        vidéo: "cX1-LzVR0Vc",
        github: "https://github.com/foltone/foltone_vehiclelock",
    },
    {
        name: "Admin menu",
        vidéo: "G8zTOF0x32s",
        github: "https://github.com/foltone/foltone_admin",
    },
    {
        name: "Job builder",
        vidéo: "TNIFFE5bOAk",
        tebex: "https://foltone-store.tebex.io/package/5982567"
    },
    {
        name: "Barbershop",
        vidéo: "CFfSFCFDYDs",
        github: "https://github.com/foltone/foltone_barbershop",
        cfx: "https://forum.cfx.re/t/free-barbershop-esx-legacy-rageui-0-00ms/5180811"
    },
    {
        name: "Advanced Ambulance Job",
        vidéo: "aCQtP-NIbRc",
        cfx: "https://forum.cfx.re/t/paid-esx-advanced-ambulance-job-rageui-fr-en/5179318",
        tebex: "https://foltone-store.tebex.io/package/5963732"
    },
    {
        name: "Ticket system",
        vidéo: "5WvTWMpKUcM",
        github: "https://github.com/foltone/foltone_ticket",
        cfx: "https://forum.cfx.re/t/free-standalone-ticket-system-rageui-fr-en-es/5009680"
    },
    {
        name: "Drop Inventory",
        img: "https://dunb17ur4ymx4.cloudfront.net/packages/images/34ecc83dd4255150bde5a238cca66e881fc82740.png",
        tebex: "https://foltone-store.tebex.io/package/5953036"
    },
    {
        name: "Vehicle Item",
        img: "https://dunb17ur4ymx4.cloudfront.net/packages/images/d5c162b980792ee99f07c59aa5b1c1c5afe38bb5.png",
        tebex: "https://foltone-store.tebex.io/package/5952810"
    },
    {
        name: "Job Vigneron",
        vidéo: "zlpOWUiEWQc",
        tebex: "https://foltone-store.tebex.io/package/5903597"
    },
    {
        name: "Driving School",
        vidéo: "SgLO5qz4CuM",
        cfx: "https://forum.cfx.re/t/paid-esx-driving-school-rageui-nui-fr-en/5166628",
        tebex: "https://foltone-store.tebex.io/package/5895598"
    },
    {
        name: "Admin commands",
        image: "https://forum.cfx.re/uploads/default/original/4X/2/e/0/2e0b509e89e05c9684b2c6e539691110486114d5.jpeg",
        cfx: "https://forum.cfx.re/t/paid-standlone-admin-command-ban-kick-jail-fr-en/5157088",
        tebex: "https://foltone-store.tebex.io/package/5832503"
    },
    {
        name: "Automatic ped mechanic",
        vidéo: "-EGvdVIrkLk",
        github: "https://github.com/foltone/foltone_ped_meca",
        cfx: "https://forum.cfx.re/t/free-nui-automatic-ped-mechanic-fr-en-es/4994016"
    },
    {
        name: "Elevator builder",
        vidéo: "Uo16osr5u-4",
        cfx: "https://forum.cfx.re/t/paid-nui-rageui-elevator-builder-fr-en-es/4965412",
        tebex: "https://foltone-store.tebex.io/package/5411397"
    },
    {
        name: "Concession & Garage",
        vidéo: "fQmGZLx_E2s",
        cfx: "https://forum.cfx.re/t/paid-esx-rageui-concession-and-garage-v2-car-boat-heli-plane-fr-en/4953257",
        tebex: "https://foltone-store.tebex.io/package/5386677"
    },
    {
        name: "Drugs system",
        vidéo: "bW3_jxIvShQ",
        github: "https://github.com/foltone/foltone_drugs"
    },
    {
        name: "Bot discord",
        vidéo: "bEadR2IkGYU",
        github: "https://github.com/foltone/foltone_bot"
    },
    {
        name: "Dispeser script",
        vidéo: "d_H2Se9NwGI",
        github: "https://github.com/foltone/foltone_distributeur"
    },
    {
        name: "Accessories shop",
        vidéo: "YdjPtrOVNr8",
        github: "https://github.com/foltone/foltone_accessories"
    },
    {
        name: "Clothes shop",
        vidéo: "YdjPtrOVNr8",
        github: "https://github.com/foltone/foltone_clothes"
    },
    {
        name: "Base template",
        vidéo: "J3D7ad_v1B0",
        github: "https://github.com/foltone/foltone_template"
    },
    {
        name: "Ambulance job",
        vidéo: "gIH_8Y3PxqU",
        github: "https://github.com/foltone/foltone_ambulance_job"
    },
    {
        name: "Pack shops",
        vidéo: "whDHVl6aW48",
        github: "https://github.com/foltone/foltone_pack_shops"
    },
]

const scripts = document.getElementById("grid-scripts");

for (const item of data) {
    const div = document.createElement("div");
    div.classList.add("script");

    const listBtn = document.createElement("div");
    listBtn.classList.add("list-btn");

    if (item.github) {
        const aRepo = document.createElement("a");
        aRepo.target = "_blank";
        aRepo.href = item.github;
        aRepo.classList.add("btn");
        const imgRepo = document.createElement("img");
        imgRepo.src = "img/github.png";
        aRepo.appendChild(imgRepo);
        aRepo.appendChild(document.createTextNode("Repository"));
        listBtn.appendChild(aRepo);


        const aDownload = document.createElement("a");
        aDownload.target = "_blank";
        aDownload.href = item.github + "/archive/refs/heads/main.zip";
        aDownload.classList.add("btn");
        const imgDownload = document.createElement("img");
        imgDownload.src = "img/download.png";
        aDownload.appendChild(imgDownload);
        aDownload.appendChild(document.createTextNode("Download"));
        listBtn.appendChild(aDownload);
    }

    if (item.cfx) {
        const aCfx = document.createElement("a");
        aCfx.target = "_blank";
        aCfx.href = item.cfx;
        aCfx.classList.add("btn");
        const imgCfx = document.createElement("img");
        imgCfx.src = "img/fivem.png";
        aCfx.appendChild(imgCfx);
        aCfx.appendChild(document.createTextNode("Post"));
        listBtn.appendChild(aCfx);
    }
    if (item.tebex) {
        const aTebex = document.createElement("a");
        aTebex.target = "_blank";
        aTebex.href = item.tebex
        aTebex.classList.add("btn");
        const imgTebex = document.createElement("img");
        imgTebex.src = "img/tebex.png";
        aTebex.appendChild(imgTebex);
        aTebex.appendChild(document.createTextNode("Buy"));
        listBtn.appendChild(aTebex);
    }


    const h1 = document.createElement("h1");
    h1.textContent = item.name;
    div.appendChild(h1);

    if (item.vidéo) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + item.vidéo;
        iframe.frameBorder = "0";
        div.appendChild(iframe);
    } else if (item.image) {
        const img = document.createElement("img");
        img.classList.add("main-img");
        img.src = item.image;
        div.appendChild(img);
    }

    div.appendChild(listBtn);

    scripts.appendChild(div);
}
