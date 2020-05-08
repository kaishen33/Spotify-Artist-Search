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
var songName = "really really";
var artistName = "drake";
var lyricsApi = {
    "async": true,
    "crossDomain": true,
    "url": "https://canarado-lyrics.p.rapidapi.com/lyrics/" + songName + artistName,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
        "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
    }
}

$.ajax(lyricsApi).done(function(response) {
    console.log(response);

    function displayArtistInfo() {
        var displayArtistName = response.content[0].artist;
        var displaySongTitle = response.content[0].title;
        $("#artistName").text(displayArtistName);
        $("#artistSongName").text(displaySongTitle);
    }
    displayArtistInfo();

    function displaySongLyrics() {
        var songLyrics = response.content[0].lyrics;
        $("#lyricsP").text(songLyrics);
    }
    displaySongLyrics();



});