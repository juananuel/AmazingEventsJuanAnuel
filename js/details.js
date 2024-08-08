import data from '../data/data.js';

const eventContainer = document.getElementById('event-container');
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');
const event = data.events.find(event => event._id === eventId);

if (event) {
  const card = document.createElement('div');
  card.className = 'card-details';
  
  const image = document.createElement('img');
  image.src = event.image;
  image.alt = event.name;
  card.appendChild(image);

  const title = document.createElement('h2');
  title.textContent = event.name;
  card.appendChild(title);

  const date = document.createElement('p');
  date.textContent = `Date: ${event.date}`;
  card.appendChild(date);

  const description = document.createElement('p');
  description.textContent = event.description;
  card.appendChild(description);

  const category = document.createElement('p');
  category.textContent = `Category: ${event.category}`;
  card.appendChild(category);

  const place = document.createElement('p');
  place.textContent = `Place: ${event.place}`;
  card.appendChild(place);

  const price = document.createElement('p');
  price.textContent = `Price: $${event.price}`;
  card.appendChild(price);

  eventContainer.appendChild(card);
} else {
  eventContainer.innerHTML = '<div class="no-results">Event not found</div>';
}