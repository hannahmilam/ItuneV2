export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data._id;
    this.albumArt = data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
  }

  get Template() {
    return /*html*/`
      <div class = "row card mb-3 custom-shadow">
        <div class="card-header">
          <img src="${this.albumArt}" height="75px">
          <div>
          <h5>${this.title}</h5>
          <p>${this.artist} - ${this.album}</p>
          </div>
          <button class="btn btn-success py-0 my-3" onclick="app.songsController.addSong('${this.id}')">$${this.price}</button>
        </div>
        <div class="card-footer bg-white">
            <audio src="${this.preview}" id="audio" controls style="width: 100px"></audio>
            
        </div>
      </div>
        `;
  }

  get playlistTemplate() {
    return /*html*/`
    <div class = "card mb-3 custom-shadow">
      <div class="card-header">
        <img src="${this.albumArt}" height="75px">
        <div>
        <h5>${this.title}</h5>
        <p>${this.artist} - ${this.album}</p>
        </div>
        <button class="btn btn-danger" onclick="app.songsController.removeSong('${this.id}')">Remove</button>
      </div>
      <div class="card-footer bg-white">
          <audio src="${this.preview}" id="audio" controls style="width: 100px"></audio>
  <!-- <button onclick="app.audioController.togglePlay()">⏯</button> -->
      </div>
  </div>
        `;
  }
}
