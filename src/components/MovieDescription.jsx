const MovieDescription = ({ nowplayingMovie }) => {
  return (
    <div className="p-4 my-50 px-10 w-[20%] aspect-video absolute bg-linear-to-r text-white">
      <p className="text-2xl font-bold">{nowplayingMovie.original_title}</p>
      <p className="text-justify w-full">{nowplayingMovie.overview}</p>
      <button className="p-2 bg-black text-white font-bold rounded-2xl opacity-50 cursor-pointer">
        ▶️ Play
      </button>
      <button className="p-2 m-1 bg-black text-white font-bold rounded-2xl opacity-50 cursor-pointer">
        {" "}
        ℹ️ More Info
      </button>
    </div>
  );
};

export default MovieDescription;
