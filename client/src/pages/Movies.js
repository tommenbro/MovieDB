import React, { useEffect, useState } from "react";
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
      <div className="bg-gray-900 w-full h-screen text-white p-4">
        <h1 className="text-5xl font-bold">Error</h1>{" "}
        <div className="text-xl bg-yellow-500 text-pink-800 border-pink-600 border-2 p-1 rounded-md mt-2">
          {error.toString()}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-900 w-full h-screen text-white">
      <h1>All Movies</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
