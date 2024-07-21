import data from "../data/data.js"

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.getElementById("cards")

  data.events.forEach((c) => {
    const card = document.createElement("div")
    card.className = "card"
    
    card.innerHTML = `
      <div class="card">
        <img src="${c.image}" class="card-img-top pt-2 px-2" alt="food fair">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-center">${c.name}</h5>
            <p class="card-text">${c.description}</p>
            <p class="detail-p">${c.category}</p>
            <p class="detail-p">${c.place}</p>
            <p class="detail-p">${c.capacity}</p>
            <p class="detail-p">${c.estimate}</p>
            <p class="detail-p">${c.assistance}</p>
            <p class="detail-p">${c.price}</p>
        </div>
      </div>
    `
    cards.appendChild(card)
  })
})

