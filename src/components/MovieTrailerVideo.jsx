import { useEffect } from "react";
import { MOVIE_ENDPOINT, MOVIESLIST_API_OPTIONS } from "../utils/constants";
import useAddMovieTrailer from "../hooks/useAddMovieTrailer";
import { useSelector } from "react-redux";

const MovieTrailerVideo = ({ nowPlayingMovieId }) => {
  const movieTrailer = useSelector((store) => store.movie.movieTrailer);
  useAddMovieTrailer(nowPlayingMovieId);
  if (!movieTrailer) return;

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer[0]?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          movieTrailer[0]?.key
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MovieTrailerVideo;
