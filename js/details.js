import data from '../data/data.js';

const cardsDetails = document.getElementById('detail-card');
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');
const event = data.events.find(event => event._id === eventId);

if (event) {
  const card = document.createElement('div');
  card.classList.add('card-details', 'd-flex', 'flex-column', 'flex-lg-row')

  card.innerHTML =
  `
  <div class="details-img p-2 d-flex justify-content-center align-items-center" id="details-img">
    <img src="${event.image}" alt="${event.name}" class="w-100 justify-content-center align-items-center">
  </div>

  <div id="details-data" class="details-data p-2 d-flex flex-column justify-content-evenly">
    <p class="text-center fw-bold">${event.name}</p>
    <ul>
      <li><span>Date: </span>${event.date}</li>
      <li><span>Description: </span>${event.description}</li>
      <li><span>Category: </span>${event.category}</li>
      <li><span>Place: </span>${event.place}</li>
      <li><span>Capacity: </span>${event.capacity}</li>
      <li><span>Estimate: </span>${event.estimate}</li>
      <li><span>Assistance: </span>${event.assistance}</li>
      <li><span>Price: </span>${event.price}</li>
    </ul>
  </div>
  `
  // const image = document.createElement('img');
  // image.src = event.image;
  // image.alt = event.name;
  // card.appendChild(image);

  // const title = document.createElement('h3');
  // title.textContent = event.name;
  // card.appendChild(title);

  // const date = document.createElement('p');
  // date.textContent = `Date: ${event.date}`;
  // card.appendChild(date);

  // const description = document.createElement('p');
  // description.textContent = event.description;
  // card.appendChild(description);

  // const category = document.createElement('p');
  // category.textContent = `Category: ${event.category}`;
  // card.appendChild(category);

  // const place = document.createElement('p');
  // place.textContent = `Place: ${event.place}`;
  // card.appendChild(place);

  // const price = document.createElement('p');
  // price.textContent = `Price: $${event.price}`;
  // card.appendChild(price);

  cardsDetails.appendChild(card);
} else {
  cardsDetails.innerHTML = '<div class="no-results">Event not found</div>';
}