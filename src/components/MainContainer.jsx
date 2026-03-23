import { useSelector } from "react-redux";
import useAddPlayingMovie from "../hooks/useAddPlayingMovie";
import MovieDescription from "./MovieDescription";
import MovieTrailerVideo from "./MovieTrailerVideo";

const MainContainer = () => {
  useAddPlayingMovie();
  const nowplayingMovie = useSelector((store) => store.movie?.nowPlayingMovie);

  if (!nowplayingMovie) return;

  return (
    <>
      <MovieDescription nowplayingMovie={nowplayingMovie} />
      <MovieTrailerVideo nowPlayingMovieId={nowplayingMovie?.id} />
    </>
  );
};

export default MainContainer;
