import { useState } from "react";
import { useCallback } from "react";

const useGet = () => {
  const [movieList, setMovieList] = useState([]);
  const sendRequest = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      const movies = data.results;
      const movieArr = [];
      for (const movie of movies) {
        movieArr.push(movie);
      }
      setMovieList(movieArr);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return {
    movieList,
    sendRequest,
  };
};
export default useGet;

export const useGetGenre = () => {
  const [genreList, setGenreList] = useState([]);
  const sendRequest = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      const genres = data.genres;
      const genreArr = [];
      for (const genre of genres) {
        genreArr.push(genre);
      }
      setGenreList(genreArr);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return {
    genreList,
    sendRequest,
  };
};
