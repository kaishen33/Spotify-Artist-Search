//GLOBAL VAR

$("#find-music").on("click",function(event){
    event.preventDefault();
    $(".forecast1").empty();

    var i = 0
    var music =$("#music-input").val();

    //This is DEEZER api call
    var deezerApi = {
    "async": true,
    "crossDomain": true,
    "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + music,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
    }
}
    
    $.ajax(deezerApi).done(function(response) {
        console.log(response.data[0].title);
    
        $("#button1").on("click",function(event){
            $(".workP").empty();
            $(".forecast1").empty();
            i++
            var work = $("<div>");
            var workP = $("<p>");
            workP.text(JSON.stringify(response.data[i]));
            var songTitle = (response.data[i].title);
            console.log(songTitle);

        workP.attr("Class", "workP");
        work.attr('class','work');
        //($(".work")).append(workP);
      ($(".forecast1")).append(workP);
            
        });
    
      
});
});









//This is Genuis api call
// var geniusApi = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "genius.p.rapidapi.com",
//         "x-rapidapi-key": "d8bb7331d7mshcb58195d90da480p15ca06jsn0559dad38ac9"
//     }
// }

// $.ajax(geniusApi).done(function(response) {
//     console.log(response);
// });