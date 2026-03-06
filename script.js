const params = new URLSearchParams(window.location.search);

const video = params.get("video");
const title = params.get("title");
const episode = params.get("episode");

const player = document.getElementById("videoPlayer");
const showTitle = document.getElementById("showTitle");
const episodeLabel = document.getElementById("episodeLabel");

if (video) player.src = video;
if (title) showTitle.textContent = title;
if (episode) episodeLabel.textContent = "Episode " + episode;