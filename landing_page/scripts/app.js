document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("logo-container");
    var logos = ["images/HD.jpg", "images/cricbuzz.jpg", "images/espncricinfo-logo.png", "images/Essentiallysport.png", "images/javaTpoint.webp", "images/lokmat.jpg", "images/moneycontrol.jpg", "images/mxplayerlogo.jpg", "images/ndtvlogo.webp", "images/news18.jpg", "images/spotkeeda.jpg", "images/the-indian-express.jpg", "images/times-of-India.png", "images/truecaller.png", "images/zee-news.jpg"];

    // Clone logos for looping effect
    logos = logos.concat(logos);

    // Append initial images
    logos.forEach(function(logoSrc) {
        var img = document.createElement("img");
        img.src = logoSrc;
        img.alt = "";
        container.appendChild(img);
    });
});