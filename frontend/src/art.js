class Art{
  constructor(title, artist_name, image_url){
    this.title = title;
    this.artist_name = artist_name;
    this.image_url = image_url;
  }

  //render art instance method

  renderArt() {
    let artsDiv = document.getElementById("art-card-container")
    artsDiv.innerHTML +=
        `
        <div><img src= ${this.image_url} /></div>
        <h3>Title: ${this.title} - Artist: ${this.artist_name}</h3>
        `
  }
}