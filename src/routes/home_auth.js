import { useEffect } from "react";
import { Router } from "react-router-dom";
import { useHistory } from "react-router-dom"

/* function to extract authorization token from URL */
export const getTokenFromUrl = (hash) => {
  const accessToken = hash.substring(1);
  const paramsInUrl =  accessToken.split('&');
  const paramsSplit = paramsInUrl.reduce((accumulater, currentValue) => {
      const [key, value] = currentValue.split('=');
      accumulater[key] = value;
      return accumulater;
  }, {});
  return paramsSplit;
}

export default function HomeAuth() {
    useEffect(() => {
      if(window.location.hash){
        const{
          access_token,
          expires_in,
          token_type,
        } = getTokenFromUrl(window.location.hash);
        console.log({ access_token });
        window.location.hash = "login=True";
      }
    });

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Welcome Home</h2>
      </main>
    );
  }