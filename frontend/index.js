
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
          let a = new Art(art.id, art.title, art.artist_name, art.image_url, art.comments)
          // console.log("id js obj", art)
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
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        let title = document.getElementById("title").value
        let artist_name =document.getElementById("artist_name").value
        let image_url = document.getElementById("image_url").value

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
            .then(resp => resp.json())
            .then(art => {
                let a = new Art(art.id, art.title, art.artist_name, art.image_url)
                a.renderArt();
            })
    })

}



function showArt(art){
    const emptyCon = document.querySelector("#container")
    emptyCon.innerHTML = ""

    const id = art.getAttribute('data-id');
    const title = art.getAttribute('data-title');
    const artist = art.getAttribute('data-artist');
    const image_url = art.getAttribute('data-image-url');


    // TODO: refactor the html partial
    emptyCon.innerHTML = `<div>
            <h1>Title: ${title}</h1>
            <h1>Author: ${artist}</h1>
            <img src= ${image_url} alt=""/>
              
          <hr />
          <p> Comments</p>
        <form id="new-art-form">
            <input placeholder="Enter name" id="name" /><br><br />
            <textarea placeholder="Enter Comment" name="content" id="content"></textarea><br>
            <input id="form-submit" type="submit" onclick="addComment(event, ${id})" value="Add New Comment">
        </form>
        <hr />
        <ul id="comments"></ul>
    </div> </div>`

    getComments(id);

}

function getComments(id){
    fetch(`${BASE_URL}/arts/${id}/comments`)
        .then(resp => resp.json())
        .then(comments => {
            for (const comment of comments) {
                let c = new Comment(comment.content, comment.name, comment.art_id)
                c.render();
            }
        })
}



function addComment(event, id){
    event.preventDefault()
    const name = document.querySelector('#name').value;
    const content = document.querySelector('#content').value;

    const comment = {
        content: content,
        name: name,
        art_id: id
    }

    fetch(`${BASE_URL}/arts/${id}/comments`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)})
        .then(resp => resp.json())
        .then(comment => {
            let c = new Comment(comment.content, comment.name, comment.art_id)
            c.render();
        });

    clearFields();

}

function clearFields(){
    document.querySelector('#name').value = ""
    document.querySelector('#content').value = ""
}
