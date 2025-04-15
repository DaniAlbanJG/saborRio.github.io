document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('miVideo');
    var source = document.getElementById('videoSource');
    var fadeDuration = 1000; // Duración del efecto de fundido en milisegundos

    // Ajustar la velocidad de reproducción
    video.playbackRate = 2;

    var videos = ["images/Video1.mp4", "images/Video2.mp4"];
    var currentVideoIndex = 0;

    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0;
        }
        source.src = videos[currentVideoIndex];
        video.load();
        fadeIn(video); // Aplicar efecto de fundido al nuevo video
        video.play();
        if (currentVideoIndex === 1) {
            video.playbackRate = 2.4;
        } else {
            video.playbackRate = 2;
        }
    }

    function fadeIn(element) {
        var opacity = 0;
        var intervalId = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(intervalId);
            }
            element.style.opacity = opacity;
            opacity += 0.01;
        }, fadeDuration / 250);
    }

    video.addEventListener('ended', playNextVideo);
});
