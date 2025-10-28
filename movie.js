

/*
const accessToken = "...";

fetch("https://api.themoviedb.org/3/movie/popular", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    console.log("movies array", movies);

    let html = '';

    movies.forEach((movie) => {
      const image = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`; // ✅ full image URL
      const name = movie.original_title;

      html += `
        <div class="movie-card">
          <div class="movie-image-container">
            <img class="poster-image" src="${image}" alt="${name}">
          </div>
          <div class="movie-information">
            <div class="name-container">
              <span class = "name-text">${name}</span>
            </div>
          </div>
        </div>
      `;
    });

    // ✅ Move this inside the .then() after html is built
    document.querySelector('.prv-js').innerHTML = html;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
*/