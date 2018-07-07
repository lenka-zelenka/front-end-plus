var youtube = require('./youtubr-api.js');

var addvideo = document.getElementById('add-video');

addvideo.addEventListener('click', event => {addVideo(getVideoId())})

function getVideoId() {
    var input = document.getElementById('search-video');
    return input.value;
}

function addVideo(videoId) {
    
    youtube.onYouTubeIframeAPIReady(videoId)
}