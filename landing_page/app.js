document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("logo-container");
    var logos = ["HD.jpg", "cricbuzz.jpg", "espncricinfo-logo.png", "Essentiallysport.png", "javaTpoint.webp", "lokmat.jpg", "moneycontrol.jpg", "mxplayerlogo.jpg", "ndtvlogo.webp", "news18.jpg", "spotkeeda.jpg", "the-indian-express.jpg", "times-of-India.png", "truecaller.png", "zee-news.jpg"];

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