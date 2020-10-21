import React, { useEffect, useState } from 'react'

import axios from '../axios'
import './css/Row.css'

export default function Row({ title, url, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const fetchData = async () => {
      const respond = await axios.get(url)
      console.table(respond.data.results)
      setMovies(respond.data.results)
      return respond
    }
    fetchData()
  }, [url])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters ${isLargeRow && 'row_large'}`}>
        {movies.map(movie => {
          return (
            <img
              className="row_poster"
              key={movie.id}
              src={`${imageBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          )
        })}
      </div>
    </div>
  )
}
