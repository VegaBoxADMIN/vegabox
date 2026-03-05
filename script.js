const params = new URLSearchParams(window.location.search);
const video = params.get("video");

const player = document.getElementById("videoPlayer");

if (video) {
    player.src = video;
} else {
    player.innerHTML = "Video not found.";
}