//This is DEEZER api call
var deezerApi = {
    "async": true,
    "crossDomain": true,
    "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=Kevin%20Gates",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
    }
}

$.ajax(deezerApi).done(function(response) {
    console.log(response);
});

//This is Genuis api call
var geniusApi = {
    "async": true,
    "crossDomain": true,
    "url": "https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
    }
}

$.ajax(geniusApi).done(function(response) {
    console.log(response);
});