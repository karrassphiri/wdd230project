
const d =new Date();
const weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function CheckDay(day){
  if(day +d.getDay() > 6){
    return day +d.getDay() -7;
  }
  else {
    return day +d.getDay();
  }
}
for(i=0;i<3;i++){
  document.getElementById("today"+(i+1)).innerHTML = weekday[CheckDay(i)];
}

/********************/


const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5780993&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsForecast) => {
    console.log(jsForecast);

    
    var i = 1;
      for(var x=0; (i<2 || x<jsForecast.list.length); x++){
        if(jsForecast.list[x].dt_txt.includes("18:00:00")){
          let cardF = document.createElement('section');
          let tempF = document.createElement('p');
          let imgF = document.createElement('img');
          
          tempF.textContent = jsForecast.list[x].main.temp.toFixed(0) + "\xB0 F";

          const imagesrc = 'https://openweathermap.org/img/w/' + jsForecast.list[x].weather[0].icon + '.png';  
          const desc = jsForecast.list[x].weather[0].description; 
          imgF.setAttribute('src', imagesrc);
          imgF.setAttribute('alt', desc);
          
          cardF.appendChild(imgF);
          cardF.appendChild(tempF);
          

          document.querySelector('div.Day' + i).appendChild(cardF);
          
          i++; 
        }
      }
  });



