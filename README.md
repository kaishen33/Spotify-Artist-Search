# SearchBeats

Searchbeats is a music library finding artist, music, and album associated with each other.

### Link

For the [finished web page](https://kaishen33.github.io/Spotify-Artist-Search/index.html)

### Overview

It is an open website to find song, artist, or album and bring out everything associated with the search. Anything typed into the searchbar will bring out artist definition, famous albums, and songs

The application is made up the home page only.

##### Accesssing Home page

The home page only has the searchbar for the user to type. Once the user clicks the search button, the page will load lyrics, album name, and artist name.

##### Technology

* VS Code v1.47.1
* jQuery
* Bootstrap
* Ajax
* Rapidapi

##### Front-End

Traditional html and css handles the design of the front page.

jQuery was used for all the functionality of the application. Ajax calls were used to talk to the database to pull data from the rapid api url key.

##### Back-End

Database of the website is all in rapid api. Although the script is technically front-end, its function is to communicate withe the pre-made backend data. 

### Known Issues

Browse Page:
* The search will sometimes bring up more obscure songs from the artist
* The search will mix up the three listed catagory due to shared names
* The website will lag before transitioning from one search to the next
* play button will not work

### Contributors

* Isaiah Edwards
* Anthony Simone
* KaiWei Shen

### Launch

Date [application](https://kaishen33.github.io/Spotify-Artist-Search/index.html) releases: `May 19th, 2020`

### Future Development

* Add functionality where the page doesn’t load any API data without ALL the API calls being finished loading
* Get accurate searches of lyrics (when searching song)
* Add the ability to get song/artist info from searching song or album name
* Add functionality for playing a sample of the song through the browser
