// src/lib/tmdb.ts
import axios from 'axios'

const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_BASE_URL = process.env.TMDB_BASE_URL

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
})

export const getPopularMovies = async (page = 1) => {
  const response = await tmdbApi.get('/movie/popular', { params: { page } })
  return response.data
}

export const getMovieDetails = async (movieId: number) => {
  const response = await tmdbApi.get(`/movie/${movieId}`)
  return response.data
}

export const searchMovies = async (query: string, page = 1) => {
  const response = await tmdbApi.get('/search/movie', {
    params: { query, page },
  })
  return response.data
}

export const getMovieReviews = async (movieId: number, page = 1) => {
  const response = await tmdbApi.get(`/movie/${movieId}/reviews`, {
    params: { page },
  })
  return response.data
}
