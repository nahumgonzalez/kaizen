const container = document.querySelector(".content");

const rain = () => {
    let j = 0;

    while (j <= 100) {
        let gout = document.createElement("i");
        let x = innerWidth * Math.random();
        let time = 5 * Math.random();

        gout.style.animationDuration =
            time <= 0.5 ? time + 0.5 + "s" : time + "s";
        gout.style.animationDelay = 0.2 + "s";
        gout.style.left = x + "px";

        container.appendChild(gout);

        j++;
    }
};

rain();
