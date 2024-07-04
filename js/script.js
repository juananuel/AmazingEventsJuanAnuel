/* 
const btnDetails = document.getElementById('details-1')
const imgDetails = document.getElementById('details-img')
const txtDetails = document.getElementById('details-data')

// const url = 'http://127.0.0.1:5500/data/data.txt'
const url = 'https://rickandmortyapi.com/api/character/2'

const calling = async () => {
  try{
    await fetch(url)
    .then(res => res.json())
    .then(data => {
      const characterData = {
        name: data.name,
        status: data.status,
        species: data.species
      }
      localStorage.setItem('characterData', JSON.stringify(characterData))
      window.location.href = '../pages/details.html'
  })
  }
  catch(error) {
    console.error('Error:', error)
  }
}

window.onload = function () {
  const characterData = JSON.parse(localStorage.getItem('characterData'))
  if (characterData) {
    txtDetails.innerHTML = `
      <p>Name: ${characterData.name}</p>
      <p>Status: ${characterData.status}</p>
      <p>Species: ${characterData.species}</p>
  `
  } else {
    const detailsDiv = document.getElementById('details-data')
    detailsDiv.innerHTML = '<p>No character data found.</p>'
  }
}

btnDetails.addEventListener('click', calling) 
*/