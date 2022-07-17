import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useLoading } from "../components/UseLoading";
import { fetchJSON } from "../components/FetchJSON";
import Modal from "react-modal";

<fetchJSON />;

function Movie({
  movie: {
    title,
    year,
    plot,
    genres,
    poster,
    metacritic,
    fullplot,
    runtime,
    imdb,
    directors,
    languages,
  },
}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "1240px",
      height: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "hidden",
      backgroundColor: "#374151",
      borderRadius: "1rem",
    },
  };

  return (
    <div className="flex justify-center scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-400 overflow-visible">
      <div className="flex flex-col ">
        <div className="bg-gray-700 w-[540px] p-4 px-32 m-4 rounded-2xl text-center shadow-lg shadow-black/40 ">
          <button
            className=" w-[full] h-full -mx-6  justify-center "
            onClick={openModal}
          >
            <h1 className="text-2xl font-bold pb-4">
              {title} <span className="font-normal">({year})</span>
            </h1>
            <img src={poster} alt={title} className="rounded-lg" />
            <p className="text-md pt-2">{plot}</p>
            <p className="pt-4 text-sm">
              Metacritic Score:{" "}
              <span className="font-bold text-md">{metacritic}</span>
            </p>
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel={"Movie Card Modal"}
            preventScroll={true}
          >
            <div className="bg-gray-700 w-full p-4 px-32  rounded-2xl items-center text-center flex-row justify-center text-white scrollbar-thin overflow:hidden">
              <button
                className="flex items-end pl-[980px] right-0 justify-end text-end text-3xl text-white"
                onClick={closeModal}
              >
                ✕
              </button>
              <h1 className="text-3xl font-bold pb-8 text-center ">
                {title} <span className="font-normal">({year})</span>
              </h1>
              <div className="flex-col columns-2">
                <img src={poster} alt={title} className="rounded-lg" />
                <p className="text-md pt-2">{fullplot}</p>
                <div className="flex flex-col m-2 p-4 ">
                  <div className="flex flex-row space-x-12 justify-center text-start items-start">
                    <p className="pt-4 text-sm">
                      Metacritic Score:{" "}
                      <span className="font-bold text-md">{metacritic}</span>
                    </p>
                    <p className="pt-4 text-sm">
                      IMDB Rating:{" "}
                      <span className="font-bold text-md">{imdb.rating}</span>
                    </p>
                  </div>
                  <div className="flex flex-row space-x-12 justify-center text-start items-start">
                    <p className="pt-4 text-sm">
                      Genre:{" "}
                      <span className="font-bold text-md">{genres[0]}</span>
                    </p>
                    <p className="pt-4 text-sm">
                      Runtime:{" "}
                      <span className="font-bold text-md">
                        {runtime} <span className="font-normal">minutes</span>
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-row space-x-12 justify-center text-start items-start">
                    <p className="pt-4 text-sm">
                      Director:{" "}
                      <span className="font-bold text-md">{directors}</span>
                    </p>
                    <p className="pt-4 text-sm">
                      Language:{" "}
                      <span className="font-bold text-md">{languages[0]}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
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
        <div className="bg-gray-900 w-full h-screen text-white p-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-400 overflow-scroll">
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
      <div className="bg-gray-900 w-full h-full text-white scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-400">
        <h1 className="text-5xl text font-bold text-gray-100 fixed items-center justify-start text-start pt-2 hover:text-white transition-all duration-300 ease-in-out pl-4">
          <Link to={"/"}>←</Link>
        </h1>
        <h1 className="text-3xl pb-8 pt-4 text font-bold text-gray-100 items-center justify-center text-center hover:text-white transition-all duration-300 ease-in-out">
          All Movies
        </h1>
        <div className="flex flex-col items-center justify-center">
          {data.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
