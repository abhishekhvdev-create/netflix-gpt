import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { MOVIE_ENDPOINT, MOVIESLIST_API_OPTIONS } from "../utils/constants";

const useAddMovieTrailer = (nowPlayingMovieId) => {
  const dispatch = useDispatch(nowPlayingMovieId);
  const addMovieTrailerVideo = async () => {
    const response = await fetch(
      MOVIE_ENDPOINT + nowPlayingMovieId + "/videos",
      MOVIESLIST_API_OPTIONS,
    );
    const movieDetail = await response.json();

    const filteredMovie = movieDetail?.results?.filter(
      (movie) => movie.name === "Official Trailer" && movie.type === "Trailer",
    );
    dispatch(addMovieTrailer(filteredMovie));
  };

  useEffect(() => {
    addMovieTrailerVideo();
  }, []);
};

export default useAddMovieTrailer;
