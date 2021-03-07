class Art{
  constructor(id, title, artist_name, image_url){
    this.id = id;
    this.title = title;
    this.artist_name = artist_name;
    this.image_url = image_url;
    this.comments = [];
  }

  //render art instance method

  renderArt() {
    let artsDiv = document.getElementById("art-card-container")

    // TODO: refactor passing of data to individual page
    artsDiv.innerHTML +=
        ` <div class="artpiece">
        <h3 style="cursor: pointer;" class="art-title" data-id="${this.id}" data-title="${this.title}"  data-artist="${this.artist_name}"  data-image-url="${this.image_url}"
          onclick="showArt(this)">Title: ${this.title} - Artist: ${this.artist_name}</h3>
        <div><img src= ${this.image_url} /></div>
        </div> `
  }
}