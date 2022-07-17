import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export function LoginCallback() {
  const navigate = useNavigate();
  useEffect(async () => {
    const { access_token } = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1))
    );
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ access_token }),
    });
    navigate("/");
  });
  return (
    <div className="bg-gray-900 bg w-full h-screen relative overflow-x-hidden">
      <h1>
        Please wait... <Loading />
      </h1>
    </div>
  );
}
