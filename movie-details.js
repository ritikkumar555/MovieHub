
const params = new URLSearchParams(location.search);
const imdbID = params.get("id");

if(imdbID)
{
    searchMovie(imdbID.trim());
}

console.log(imdbID);

async function searchMovie(){
    let response = await fetch(`http://www.omdbapi.com/?apikey=dadf8b8&i=${imdbID}&plot=full`);
    let data = await response.json();
    console.log(data);
    
    if(data.Response === "True")
    {
        // displayMovies(data.Search);  
    }
    else{
        // movieHub.innerHTML = `<p>${data.Error}</p>`
        console.log(data.Error);
    } 
}

// searchMovie();
