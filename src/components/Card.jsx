import Rating from "./Rating";

function Card({ movie }) {
  return (
    <div className="w-64" data-testid="movie-card">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
      />
      <p data-testid="movie-release-date" className="my-3">
        {movie.release_date}
      </p>
      <p data-testid="movie-title" className="text-xl font-bold">
        {movie.title}
      </p>
      <Rating />
    </div>
  );
}

export default Card;
