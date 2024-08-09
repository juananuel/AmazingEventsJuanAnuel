import data from '../data/data.js'

// for (let i = 0; i < data.events.length; i++) {
//   if(data.currentDate > data.events[i].date){

//     const card = document.createElement("div")
//     card.className = "card"
//     let c = data.events
    
//     card.innerHTML = `

//         <img src="${c[i].image}" class="card-img-top pt-2 px-2" alt="${c[i].name}">
//         <div class="card-body d-flex flex-column justify-content-between">
//           <div>
//             <h5 class="card-title text-center">${c[i].name}</h5>
//             <p class="card-text">${c[i].description}</p>
//           </div>
//           <div class="d-flex justify-content-between align-items-center">
//             <p class="detail-p"><b>Price:</b> ${c[i].price}$</p>
//             <a href="../pages/details.html" id="details-7" class="btn btn-primary">Details</a>
//           </div>
//         </div>
//     `
//     document.getElementById("cards").appendChild(card)
//   }
// }

const cards = document.getElementById('cards');
const search = document.getElementById('search');
const checkboxes = document.getElementById('checkboxes');

const categories = ['All', ...new Set(data.events.map(event => event.category))];

categories.forEach(category => {
  const label = document.createElement('label');
  label.className = 'checkbox-label';
  label.innerHTML = `
    <input type="checkbox" value="${category}" ${category === 'All' ? 'checked' : ''}> ${category}
  `;
  checkboxes.appendChild(label);
});

function displayEvents(events) {
  cards.innerHTML = '';
  if (events.length === 0) {
    cards.innerHTML = '<div class="no-results fs-5 p-3 bg-body-tertiary text-primary-emphasis">We sorry! No results were found for your search :(</div>';
  } else {
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'card';
      
      const image = document.createElement('img');
      image.src = event.image;
      image.alt = event.name;
      image.classList.add('card-img-top', 'pt-2', 'px-2');
      card.appendChild(image);

      const title = document.createElement('h5');
      title.textContent = event.name;
      title.classList.add('card-title', 'text-center');
      card.appendChild(title);

      const description = document.createElement('p');
      description.textContent = event.description;
      description.classList.add('card-text', 'px-2');
      card.appendChild(description);

      const price = document.createElement('p');
      price.textContent = `Price: $${event.price}`;
      price.classList.add('text-center', 'price');
      card.appendChild(price);

      const button = document.createElement('button');
      button.textContent = 'Details';
      button.classList.add('btn', 'btn-primary', 'mx-2', 'mb-3');
      button.addEventListener('click', () => {
        window.location.href = `../pages/details.html?id=${event._id}`;
      });
      card.appendChild(button);

      cards.appendChild(card);
    });
  }
}

function filterEvents() {
  const searchText = search.value.toLowerCase();
  const checkedCat = Array.from(checkboxes.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);

  const currentDate = new Date(data.currentDate);

  let filteredEvents = data.events.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate < currentDate && 
      (checkedCat.includes('All') || checkedCat.includes(event.category)) &&
      (event.name.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText) ||
      event.category.toLowerCase().includes(searchText))
    );
  });

  displayEvents(filteredEvents);
}

function handleCheckboxChange(e) {
  if (e.target.value === 'All' && e.target.checked) {
    Array.from(checkboxes.querySelectorAll('input[type="checkbox"]')).forEach(checkbox => {
      if (checkbox.value !== 'All') {
        checkbox.checked = false;
      }
    });
  } else {
    checkboxes.querySelector('input[value="All"]').checked = false;
  }
  filterEvents();
}

filterEvents();

search.addEventListener('input', filterEvents);
checkboxes.addEventListener('change', handleCheckboxChange);
