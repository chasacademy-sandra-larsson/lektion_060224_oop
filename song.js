// Konstrukturfunktion
function Song(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
  
  Song.prototype.playSong = function() {
      return `Playing ${this.title} by ${this.artist}`;
  }
  
  const song1 = new Song("Happy", "Pharell", 3.45);
  const song2 = new Song("Imagine", "John Lennon", 4.05);
  
  console.log(song1.playSong()) // "Playing Happy by Pharell"
  song2.playSong(); // "Playing Imagine by John Lennon"