import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useLoading } from "../components/UseLoading";
import { fetchJSON } from "../components/FetchJSON";

<fetchJSON />;

function Movie({
  movie: { title, year, plot, genre, poster, metacritic, fullplot },
}) {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="bg-gray-700 w-[540px] p-4 px-32 m-4 rounded-2xl text-center">
          <h1 className="text-2xl font-bold pb-4">
            {title} <span className="font-normal">({year})</span>
          </h1>
          <img src={poster} alt={title} className="rounded-lg" />
          <p className="text-md pt-2">{plot}</p>
          <p className="pt-4 text-sm">
            Metacritic Score:{" "}
            <span className="font-bold text-md">{metacritic}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const Movies = () => {
  const { loading, error, data } = useLoading(async () =>
    fetchJSON("/api/movies")
  );

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="bg-gray-900 w-full h-screen text-white p-4">
          <h1 className="text-5xl font-bold">Error</h1>{" "}
          <div className="text-xl text-yellow-500 bg-pink-800 border-red-500 border-2 p-1 mt-2">
            {error.toString()}
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <div className="bg-gray-900 w-full h-full text-white">
        <h1 className="text-5xl text font-bold text-gray-100 items-center justify-start text-start pt-2 hover:text-white transition-all duration-300 ease-in-out pl-4">
          <Link to={"/"}>←</Link>
        </h1>
        <h1 className="text-3xl pb-8 text font-bold text-gray-100 items-center justify-center text-center hover:text-white transition-all duration-300 ease-in-out">
          All Movies
        </h1>

        {data.map((movie) => (
          <Movie key={movie.title} movie={movie} />
        ))}
        <Footer />
      </div>
    </>
  );
};

export default Movies;
