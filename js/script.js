const btnDetails = document.getElementById('details-1')
const imgDetails = document.getElementById('details-img')
const txtDetails = document.getElementById('details-data')

// const url = 'http://127.0.0.1:5500/data/data.txt'
const url = 'http://api.weatherunlocked.com/api/current/ar.B1870?app_id=b46e9457&app_key=c2c57f58ad22962db0b49d68e5e1f608'

const calling = () => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        txtDetails.innerText = JSON.stringify("Temperatura: " + data.temp_c + " grados C°" + " y Humedad: " + data.humid_pct + "%")      
  })
  .catch((error) => console.error('Error:', error));
}

btnDetails.addEventListener('click', calling)
