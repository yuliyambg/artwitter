
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

    artFormSubmission();
}

function artFormSubmission(){
    //grabbing information from the form
    const form = document.getElementById("form")
    form.addEventListener("submit", () =>{
        event.preventDefault()
        let title = document.getElementById("title").value
        let artist_name =document.getElementById("artist_name").value
        let image_url = document.getElementById("image_url").value
// console.log(title, artist_name, image_url)
        let art = {
            title: title,
            artist_name: artist_name,
            image_url: image_url
        }
        fetch(`${BASE_URL}/arts`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(art)
        })
            // .then(resp => console.log(resp))
            .then(resp => resp.json())
            .then(art => {
                let a = new Art(art.title, art.artist_name, art.image_url)
                a.renderArt();
            })
    })

}
