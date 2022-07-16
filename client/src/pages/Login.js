import React, { useEffect, useState } from "react";
import { fetchJSON } from "../components/FetchJSON";

export function Login() {
  const [redirectUrl, setRedirectUrl] = useState();
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
    setRedirectUrl(
      authorization_endpoint + "?" + new URLSearchParams(parameters)
    );
  }, []);

  return (
    <div className="bg-gray-900 bg w-full h-screen relative overflow-x-hidden py-8">
      <a href={redirectUrl} className="text-white p-8 text-2xl">
        Log in with Google
      </a>
    </div>
  );
}
