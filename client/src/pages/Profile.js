import React from "react";
import Loading from "../components/Loading";
import { useLoading } from "../components/UseLoading";
import { fetchJSON } from "../components/FetchJSON";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export function Profile() {
  const { loading, data, error } = useLoading(async () => {
    return await fetchJSON("/api/login");
  });

  if (loading) {
    return (
      <div className="bg-gray-900 bg w-full h-screen relative overflow-x-hidden py-8">
        <h1>
          Please wait... <Loading />
        </h1>
      </div>
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
      <div className="flex flex-col bg-gray-900 bg w-full h-screen relative overflow-x-hidden text-center">
        <h1 className="text-5xl text font-bold text-gray-100 fixed items-center justify-start text-start pt-2 hover:text-white transition-all duration-300 ease-in-out pl-4">
          <Link to={"/"}>←</Link>
        </h1>
        <h1 className="text-3xl text font-bold text-gray-100 items-center justify-center text-center pt-2 hover:text-white transition-all duration-300 ease-in-out">
          My Profile
        </h1>
        <div className="flex pt-24 justify-center items-center text-center relative ">
          <div className=" bg-gray-700 w-[540px] h-[540px] justify-center items-center text-center relative rounded-3xl shadow-zinc-900 shadow-xl text-white">
            <div className="flex items-center justify-center m-4 pt-4">
              <img
                className="rounded-full shadow-gray-900 shadow-lg"
                src={data.picture}
                alt={data.name}
              />
            </div>
            <h1 className="text-3xl font-bold pt-2">{data.name}</h1>
            <p className="font-regular pt-2">{data.email}</p>
            <p>{data.locale}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
