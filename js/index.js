import data from "../data/data.js"

const cards = document.getElementById('cards');
const searchInput = document.getElementById('search');
const checkboxesContainer = document.getElementById('checkboxes');

const categories = ['All', ...new Set(data.events.map(event => event.category))];

categories.forEach(category => {
  const label = document.createElement('label');
  label.className = 'checkbox-label';
  label.innerHTML = `
    <input type="checkbox" value="${category}" ${category === 'All' ? 'checked' : ''}> ${category}
  `;
  checkboxesContainer.appendChild(label);
});

function displayEvents(events) {
  cards.innerHTML = '';
  if (events.length === 0) {
    cards.innerHTML = '<div class="no-results">We sorry! No events found :(</div>';
  } else {
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${event.image}" class="card-img-top pt-2 px-2" alt="${event.name}">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title text-center">${event.name}</h5>
            <p class="card-text">${event.description}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="detail-p"><b>Price:</b> ${event.price}$</p>
            <a href="../pages/details.html" id="details-7" class="btn btn-primary">Details</a>
          </div>
        </div>
      `
      
    //   const image = document.createElement('img');
    //   image.src = event.image;
    //   image.alt = event.name;
    //   card.appendChild(image);

    //   const title = document.createElement('h2');
    //   title.textContent = event.name;
    //   card.appendChild(title);

    //   const description = document.createElement('p');
    //   description.textContent = event.description;
    //   card.appendChild(description);

    //   const price = document.createElement('p');
    //   price.textContent = `Price: $${event.price}`;
    //   card.appendChild(price);

    //   const button = document.createElement('button');
    //   button.textContent = 'Details';
    //   button.addEventListener('click', () => {
    //     window.location.href = `details.html?id=${event._id}`;
    //   });
    //   card.appendChild(button);

      cards.appendChild(card);
    });
  }
}

function filterEvents() {
  const searchText = searchInput.value.toLowerCase();
  const checkedCategories = Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);

  let filteredEvents = data.events.filter(event => {
    return (
      (checkedCategories.includes('All') || checkedCategories.includes(event.category)) &&
      (event.name.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText) ||
      event.category.toLowerCase().includes(searchText))
    );
  });

  displayEvents(filteredEvents);
}

function handleCheckboxChange(e) {
  if (e.target.value === 'All' && e.target.checked) {
    Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]')).forEach(checkbox => {
      if (checkbox.value !== 'All') {
        checkbox.checked = false;
      }
    });
  } else {
    checkboxesContainer.querySelector('input[value="All"]').checked = false;
  }
  filterEvents();
}

// Initial display
displayEvents(data.events);

// Event listeners
searchInput.addEventListener('input', filterEvents);
checkboxesContainer.addEventListener('change', handleCheckboxChange);

// for (let i = 0; i < data.events.length; i++) {
//   const card = document.createElement("div")
//   card.className = "card"
//   let c = data.events
  
//   card.innerHTML = `
//     <img src="${c[i].image}" class="card-img-top pt-2 px-2" alt="${c[i].name}">
//     <div class="card-body d-flex flex-column justify-content-between">
//       <div>
//         <h5 class="card-title text-center">${c[i].name}</h5>
//         <p class="card-text">${c[i].description}</p>
//       </div>
//       <div class="d-flex justify-content-between align-items-center">
//         <p class="detail-p"><b>Price:</b> ${c[i].price}$</p>
//         <a href="../pages/details.html" id="details-7" class="btn btn-primary">Details</a>
//       </div>
//     </div>
//   `
//   document.getElementById("cards").appendChild(card)
// }

