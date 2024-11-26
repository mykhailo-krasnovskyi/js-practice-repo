async function fetchTemperature(city) {
    const apiKey = 'bd664c238b837a54a22ee16796bbea50';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;


}


const city = 'Kharkiv';
fetchTemperature(city)
    .then(data => {
        if (data !== null) {
            console.log(`Current temp in city ${city}: ${data.main.temp}°C`);
        }
    })
    .catch(((e) => {
        console.log(e)
    }));
