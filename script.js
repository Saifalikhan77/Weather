async function clicked() {
    const appid = "6bed55f85ed36abb94c0c6f93dfc84fb";
    let cityName = document.querySelector(".city").value;
    let empty = document.querySelector(".empty");
    let image= document.querySelector(".image");
    if(cityName.length===0){
        cityName= "Hyderabad"
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${appid}&units=metric&q=${cityName}`
    const res = await fetch(apiUrl);
    let data = await res.json();
    let temp = document.querySelector(".temp")
    let result = temp.getElementsByTagName("p");
    result[0].innerHTML = `Sky is ${data.weather[0].main}`
    result[1].innerHTML = `Name: ${data.name}`
    result[2].innerHTML = `Temperature: ${data.main.temp}°C`
    result[3].innerHTML = `Humidity: ${data.main.humidity}`
    result[4].innerHTML = `Wind: ${data.wind.speed}`
    

    console.log(data);
    if(data.weather[0].main =='Clouds'){
        image.src = "images/clouds.png";
    }
    else if(data.weather[0].main =='Mist'){
        image.src ="/images/mist.png";
    }
    else if(data.weather[0].main =='Clear'){
        image.src ="/images/clear.png";
    }
    else if(data.weather[0].main =='Drizzle'){
        image.src ="/images/drizzle.png";
    }
    else if(data.weather[0].main =='Rain'){
        image.src ="/images/rain.png";
    }
    else if(data.weather[0].main =='Snow'){
        image.src ="/images/snow.png";
    }
    else{
        image.src=" ";
    }
}