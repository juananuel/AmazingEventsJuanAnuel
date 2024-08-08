import data from "../data/data.js"


const cards = document.getElementById('cards');
const search = document.getElementById('search');
const checkboxes = document.getElementById('checkboxes');
const btnDetails = document.getElementById('details-btn');

const categories = ['All', ...new Set(data.events.map(event => event.category))];

categories.forEach(category => {
  const label = document.createElement('label');
  label.classList.add('checkbox-label', 'form-check', 'mx-2');
  label.innerHTML = `
    <input class="form-check-input" type="checkbox" value="${category}" ${category === 'All' ? 'checked' : ''}> ${category}
  `;
  checkboxes.appendChild(label);
});

function displayEvents(events) {
  cards.innerHTML = '';
  if (events.length === 0) {
    cards.innerHTML = '<div class="no-results fs-5 p-3 bg-body-tertiary text-primary-emphasis">We sorry! No events found :(</div>';
  } else {
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'card';

      // card.innerHTML = `
      //   <img src="${event.image}" class="card-img-top pt-2 px-2" alt="${event.name}">
      //   <div class="card-body d-flex flex-column justify-content-between">
      //     <div>
      //       <h5 class="card-title text-center">${event.name}</h5>
      //       <p class="card-text">${event.description}</p>
      //     </div>
      //     <div class="d-flex justify-content-between align-items-center">
      //       <p class="detail-p"><b>Price:</b> ${event.price}$</p>
      //       <button id="details-btn" class="btn btn-primary">Details</button>
      //     </div>
      //   </div>
      // `

      const image = document.createElement('img');
      image.src = event.image;
      image.alt = event.name;
      card.appendChild(image);

      const title = document.createElement('h5');
      title.textContent = event.name;
      card.appendChild(title);

      const description = document.createElement('p');
      description.textContent = event.description;
      card.appendChild(description);

      const price = document.createElement('p');
      price.textContent = `Price: $${event.price}`;
      card.appendChild(price);

      const button = document.createElement('button');
      button.textContent = 'Details';
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

  let filteredEvents = data.events.filter(event => {
    return (
      (checkedCat.includes('All') || checkedCat.includes(event.category)) &&
      (event.name.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText) ||
      event.category.toLowerCase().includes(searchText))
    );
  });

  displayEvents(filteredEvents);
}

function handleChanges(e) {
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

displayEvents(data.events);

search.addEventListener('input', filterEvents);
checkboxes.addEventListener('change', handleChanges);

