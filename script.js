//GLOBAL VAR

$("#findMusicBtn").on("click", function(event) {
    event.preventDefault();
    $(".songInfoClass").empty();

    var i = 0
    var artistName = $("#music-input").val();

    //Grabbing the songs by artist name
    var deezerApi = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
        }
    }
    $.ajax(deezerApi).done(function(response) {
        console.log(response.data[0].title);

        $("#nextSongBtn").on("click", function() {
            $(".songP").empty();
            $(".songInfoClass").empty();
            i++;
            var songDiv = $("<div>");
            var songP = $("<p>");
            songP.text(JSON.stringify(response.data[i]));
            var songName = (response.data[i].title);
            console.log(songName);

            songP.attr("Class", "songP");
            songDiv.attr('class', 'songDiv');
            $(".songInfoClass").append(songP);


            //Grabbing lyrics of the song
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
                displayArtistInfo();
                displaySongLyrics();

                function displayArtistInfo() {
                    var displayArtistName = response.content[0].artist;
                    var displaySongTitle = response.content[0].title;
                    $("#artistName").text(displayArtistName);
                    $("#artistSongName").text(displaySongTitle);
                }

                function displaySongLyrics() {
                    var songLyrics = response.content[0].lyrics;
                    $("#lyricsP").text(songLyrics);
                }

            });

        });


    });
});