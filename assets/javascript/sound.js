class Sound {
  constructor(url) {
    this.audio = new Audio(url);
  }

  play() {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  setVolume(volume) {
    this.audio.volume = volume;
  }
}
