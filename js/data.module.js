

 export class Data {
 displayGames(response) {
   
    let cartona = ``
    for (let i = 0; i < response.length; i++) {
        cartona += `   <div  id="moh" class=" crd col-md-6  col-lg-4 col-xl-3">
  <div id='${response[i].id}' class="card h-100 text-center bg-transparent">
      <div class="card-body">
          <div class="img mb-3">
              <img src="${ response[i].thumbnail}" class="img-responsive w-100" alt="">
          </div>
          <div class="cont d-flex justify-content-between align-items-center">
              <h3 class="text-white">${ response[i].title}</h3>
              <button class="bt btn btn-info text-white  "> free</button>
          </div>
          <p >${response[i].short_description.split(" ", 5)} </p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
          <span class="badge bg-secondary">${response[i].genre}</span>
          <span class="badge bg-secondary">${response[i].platform}</span>
      </div>
  </div>
</div>`
    }
    document.getElementById('displayGames').innerHTML = cartona
    
    
   
}
 detailsss(data) {
   
    let cartona = ``


    cartona += `   <div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100" alt="image details">
</div>
<div class="col-md-8">
    <h3>Title: ${data.title}</h3>
    <p>Category: <span class="badge bg-info text-dark">${data.genre}</span> </p>
    <p>Platform: <span class="badge bg-info text-dark"> ${data.platform}</span> </p>
    <p>Status: <span class="badge bg-info text-dark"> ${data.status}</span> </p>
    <p class="small">${data.description}</p>
    <a class="btn btn-outline-warning" target="_blank"
        href="${data.game_url}">Show Game</a>
</div>     `

    document.getElementById('detailsContent').innerHTML = cartona;

    
}

}