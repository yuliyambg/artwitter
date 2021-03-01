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

    artsDiv.innerHTML +=
        ` <div class="artpiece">
        <h3 class="art-title"  data-title="${this.title}"  data-artist="${this.artist_name}"  data-image-url="${this.image_url}"
        data-comments="${this.comments}"  
          onclick="showArt(this)">Title: ${this.title} - Artist: ${this.artist_name}</h3>
        <div><img src= ${this.image_url} /></div>
        </div> `
  }
}


// <button className='pen' data-id=${this.id}> Add Comment &#128394 </button>