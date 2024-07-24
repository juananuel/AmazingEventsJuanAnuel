import data from '../data/data.js'

for (let i = 0; i < data.events.length; i++) {
  if(data.currentDate > data.events[i].date){

    const card = document.createElement("div")
    card.className = "card"
    let c = data.events
    
    card.innerHTML = `

        <img src="${c[i].image}" class="card-img-top pt-2 px-2" alt="${c[i].name}">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title text-center">${c[i].name}</h5>
            <p class="card-text">${c[i].description}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="detail-p"><b>Price:</b> ${c[i].price}$</p>
            <a href="../pages/details.html" id="details-7" class="btn btn-primary">Details</a>
          </div>
        </div>
    `
    document.getElementById("cards").appendChild(card)
  }
}