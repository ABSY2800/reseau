const apikey="f264ded955eaabe04598e5ba869d7ef7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
 
const searchBox =document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function chekweather(city){
    const response= await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
     


}
searchBtn.addEventListener("click",()=>{
    chekweather(searchBox.value);
})
chekweather();
