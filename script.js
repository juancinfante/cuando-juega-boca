var contenedor = document.getElementById("contenedor");

var dateMatch = document.getElementById("dateMatch");



function getData(){

  
  fetch("https://v3.football.api-sports.io/fixtures?season=2023&team=451&next=3",{
    method: "GET",
    headers: {
      "x-rapidapi-key": "0f44f04fd33a6e5f665b921287605a7c",
      "x-rapidapi-host": "v3.football.api-sports.io",
    }
  })
  .then((response) => response.json())
  .then(data =>{
    for(i=0;i<data.response.length;i++){

      // SETEANDO FECHA Y HORARIO
      var date = new Date(data.response[i].fixture.date)
    
      // Agregando un 0 al mes si es necesario
      var month = ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : date.getMonth())

    // SETEANDO PARTIDO 
    contenedor.innerHTML += `
    <div class="contenedor-partido">
    <h2 class="competicion">${data.response[i].league.name}</h2>
    <h2 class="fecha">${date.getDate() + "/" + month + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "hs."}</h2>
    <div class="equipo">
      <img src="${data.response[i].teams.home.logo}" alt="Home Team">
      <p>${data.response[i].teams.home.name}</p>
    </div>
    <h1>VS</h1>
    <div class="equipo">
      <img src="${data.response[i].teams.away.logo}" alt="Away Team">
      <p>${data.response[i].teams.away.name}</p>
    </div>
  </div>`

    }
  })
  .catch(err => console.error(err));
}
    
getData()