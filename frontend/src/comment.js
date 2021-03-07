class Comment{
  constructor(content, name, art_id) {
    this.content = content;
    this.name = name;
    this.art_id = art_id;
  }

  render(){

    const commentList = document.querySelector("#comments");

    commentList.innerHTML += `<li>${this.content} - ${this.name}</li>`
  }
}
