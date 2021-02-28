document.addEventListener("DOMContentLoaded", () => {
  fetchArts()


})

// read - fetch arts index
  const BASE_URL = "http://127.0.0.1:3000"

function fetchArts(){
  fetch(`${BASE_URL}/arts`)
      .then(resp => resp.json())
      .then(arts => {
        // console.log(arts)
        for (const art of arts){
          // console.log("rails obj", art)
          let a = new Art(art.title, art.artist_name, art.image_url)
          // console.log("js obj", art)
        }
      })

  }

  // create - create new art
