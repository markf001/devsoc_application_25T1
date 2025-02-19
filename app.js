function goToPage(location) {
    const map = document.querySelector(".map");
    const locations = document.querySelectorAll(".location");
    const clickedLocation = document.querySelector(`.location[onclick="goToPage('${location}')"]`); // Fixed querySelector

    const backgrounds = {
        bali: "images/bali4.png",
        sk: "images/.png",
        vn: "images/vn14.png",
        aus: "images/aus-sydney.png"
    };

    const pageLinks = {
        aus: "aus.html",
        bali: "bali.html",
        vn: "vn.html",
        sk: "sk.html"
    };

    document.body.style.pointerEvents = "none";

    const rect = clickedLocation.getBoundingClientRect();
    const centerX = (rect.left + rect.width / 2) / window.innerWidth;
    const centerY = (rect.top + rect.height / 2) / window.innerHeight;

    const originX = `${centerX * 100}%`;
    const originY = `${centerY * 100}%`;

    locations.forEach(loc => {
        loc.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        loc.style.opacity = "0";
        loc.style.transform = "scale(0.8)";
    });

    setTimeout(() => {
        locations.forEach(loc => loc.style.display = "none");
        
        map.style.transformOrigin = `${originX} ${originY}`; 
        map.style.transform = "scale(3)";
        map.style.opacity = "0";

        setTimeout(() => {
            if (pageLinks[location]) {
                window.location.href = pageLinks[location]; // Redirect to the page
                return;
            }
            setTimeout(() => {
                map.style.opacity = "1";
                map.style.transform = "scale(1)";
                document.body.style.pointerEvents = "auto";
            }, 500);
        }, 1000);
    }, 500);
}

function goBack() {
history.back()
}


