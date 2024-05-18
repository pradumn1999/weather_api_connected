let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forcast = document.querySelector(".weather_forcasting");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_FL = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search")


// to get actule cuntry name
const getCountryName=(code) =>{
    return new Intl.DisplayNames([code], {type: "region"}).of(code);
};

const getDateTime = (dt) => {
    
    const curDate = new Date(dt * 1000); //convert second to milisecond
    
    console.log(curDate);
    
    const option = {
        weekday : "long",
        year :"numeric",
        month : "long",
        day : "numeric",
        houre : "numeric",
        minute : "numeric"
    }
    
    const formatter = new Intl.DateTimeFormat("en-US", option);
    //  console.log(formatter);
     return formatter.format(curDate);
    
};
 
let city = "Dhanbad";

citySearch.addEventListener('submit', (e) =>{
      e.preventDefault();

      let enterCity = document.querySelector(".city_name");
        // console.log(enterCity.value);
      city = enterCity.value;

      getWeatherData();
      cityName.value= "";
});


const getWeatherData = async () =>{

     const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2a051a0df8b8b54523c445c9579bf1e`
    try{
        const res = await fetch(weatherUrl)
        const data = await res.json();
        console.log(data);

        const {main, name, wind, weather, sys, dt} = data;

        cityName.innerHTML= `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = getDateTime(dt);

        w_forcast.innerHTML = weather[0].main;
        w_icon.innerHTML =`<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`

        w_temperature.innerHTML = `${(main.temp-273.15).toFixed(2)}&#176C`;
        w_minTem.innerHTML = `min${(main.temp-273.15).toFixed(2)}&#176C`;
        w_maxTem.innerHTML = `max${(main.temp-273.15).toFixed(2)}&#176C`;
        
        w_FL.innerHTML = `${(main.feels_like-273.15).toFixed(2)}&#176`;
        w_humidity.innerHTML = `${main.humidity}%`;
        w_wind.innerHTML = `${wind.speed}m/s`;
        w_pressure.innerHTML = `${main.pressure}pha`;
    }
    catch(error)
{
    console.log(error);
}}


document.addEventListener("load", getWeatherData());