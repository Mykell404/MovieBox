import { useEffect, useState } from "react";
import Card from "../Card";

function Main() {
  const API_KEY = "b87635824edef5ecfaf3f72f0b46052e";
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      const firstTen = data.results.slice(0, 10);
      setMovies(firstTen);
      console.log(firstTen);
    }
    fetchData();
  }, []);
  return (
    <div className="px-24 py-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold ">Featured Movie</h2>
        <p className="text-[#be123c]">See more &gt;</p>
      </div>
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-x-24 gap-y-4">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
