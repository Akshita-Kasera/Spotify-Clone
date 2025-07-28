const playBtn = document.getElementById("playPause");
const audio = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");

let isPlaying = false;

// Play/Pause functionality
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.src = "./assets/player_icon4.png"; // change to pause icon
    isPlaying = true;
  } else {
    audio.pause();
    playBtn.src = "./assets/player_icon3.png"; // change to play icon
    isPlaying = false;
  }
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    let progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
  }
});

// Seek song when dragging progress bar
progressBar.addEventListener("input", () => {
  if (audio.duration) {
    let seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  }
});

