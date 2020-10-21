// const API_KEY = process.env.TMDB_API_KEY
const API_KEY = 'b7c18418256f83f2c7c6f1a2ac8e2542'

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `tv/top_rated?api_key=${API_KEY}`,
  fetchActionTV: `discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchMysteryTV: `discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchDramaTV: `discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchComedyTV: `discover/tv?api_key=${API_KEY}&with_genres=35`,
}

export default requests
