import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function useLoading(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  async function load() {
    try {
      setLoading(true);
      setData(await loadingFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return {
    loading,
    error,
    data,
  };
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Network error: ${res.status}: ${res.statusText}`);
  }
  return await res.json();
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
      <div className="bg-gray-900 w-full h-screen text-white">
        <h1 className="text-5xl text font-bold text-gray-100 items-center justify-start text-start pt-2 hover:text-white transition-all duration-300 ease-in-out pl-4">
          <Link to={"/"}>←</Link>
        </h1>
        <h1 className="text-3xl text font-bold text-gray-100 items-center justify-center text-center hover:text-white transition-all duration-300 ease-in-out">
          All Movies
        </h1>
        <ul>
          {data.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
