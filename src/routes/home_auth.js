import { useEffect } from "react";

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
        const object = getTokenFromUrl(window.location.hash);
        console.log({ object });
      }
    });

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Welcome Home</h2>
      </main>
    );
  }