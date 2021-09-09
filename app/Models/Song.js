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
      <div class = "row card">
        <div class="card-header justify-content-between d-flex ">
          <img src="${this.albumArt}" height="75px">
          <div>
          <h5>${this.title}</h5>
          <p>${this.artist} - ${this.album}</p>
          </div>
          <button class="btn btn-success py-0 my-3" onclick="app.songsController.addSong('${this.id}')">$${this.price}</button>
        </div>
        <div class="align-self-center card-footer bg-white m-0 p-0">
            <audio src="${this.preview}" controls></audio>
        </div>
      </div>
        `;
  }

  get playlistTemplate() {
    return /*html*/`
    <div class = "card mx-3">
      <div class="card-header justify-content-between d-flex">
        <img src="${this.albumArt}" height="75px">
        <div>
        <h5>${this.title}</h5>
        <p>${this.artist} - ${this.album}</p>
        </div>
        <button class="btn btn-danger py-0 my-3" onclick="app.songsController.removeSong('${this.id}')">Remove</button>
      </div>
      <div class="align-self-center card-footer bg-white mb-3 p-0">
          <audio src="${this.preview}" controls></audio>
      </div>
  </div>
        `;
  }
}
