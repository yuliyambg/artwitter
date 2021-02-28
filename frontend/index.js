
const BASE_URL = "http://127.0.0.1:3000"

// whether or not the form is showing
let addArt = false;

document.addEventListener("DOMContentLoaded", () => {
  fetchArts();
  showForm();
});

// read - fetch arts index
function fetchArts(){
  fetch(`${BASE_URL}/arts`)
      .then(resp => resp.json())
      .then(arts => {
        // console.log(arts)
        for (const art of arts){
          // console.log("rails obj", art)
          let a = new Art(art.title, art.artist_name, art.image_url)
          // console.log("js obj", art)
          a.renderArt();
        }
      })

  }

  // create - create new art
// once form is submitted => fetch post to backend


function showForm() {
    // add art button
    const addArtBtn = document.querySelector("#add-art");
    // form to create art
    const form = document.getElementById("form")

    // shows art form on click
    addArtBtn.addEventListener("click", () => {
        addArt = !addArt;

        if (addArt) {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });

}
