var searchEntry = "Apple";
var urbanAPI = {
"async": true,
"crossDomain": true,
"url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + searchEntry,
"method": "GET",
"headers": {
	"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
	"x-rapidapi-key": "7ac5693631msh1be654ee56cba4ap14b22cjsn1aef1fe207ca"
}
}

$.ajax(urbanAPI).done(function (response) {
	
console.log(response);

var searchTest = $("<text>")
searchTest.text("");
searchTest.text(JSON.stringify(response.data[i]));
	
});