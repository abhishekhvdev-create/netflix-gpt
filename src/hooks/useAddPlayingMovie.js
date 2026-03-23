import { useDispatch } from "react-redux";
import {
  MOVIESLIST_API_OPTIONS,
  MOVIESLIST_NOWPLAYING_ENDPOINT,
} from "../utils/constants";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddPlayingMovie = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(
      MOVIESLIST_NOWPLAYING_ENDPOINT,
      MOVIESLIST_API_OPTIONS,
    );
    const nowPlayingMovies = await response.json();
    dispatch(addNowPlayingMovie(nowPlayingMovies.results[0]));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useAddPlayingMovie;
