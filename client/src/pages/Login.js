import React, { useEffect } from "react";
import { fetchJSON } from "../components/FetchJSON";
import Loading from "../components/Loading";

export function Login() {
  useEffect(async () => {
    const { authorization_endpoint } = await fetchJSON(
      "https://accounts.google.com/.well-known/openid-configuration"
    );

    const parameters = {
      response_type: "token",
      client_id:
        "321933460287-lis48gqmc2pk1k4nfg9l0v4a9uahs99l.apps.googleusercontent.com",
      scope: "email profile",
      redirect_uri: window.location.origin + "/login/callback",
    };
    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  }, []);

  return (
    <div className="bg-gray-900 bg w-full h-screen relative overflow-x-hidden py-8">
      <h1 className="text-white p-8 text-2xl">
        Redirecting, please wait...
        <Loading />
      </h1>
    </div>
  );
}
