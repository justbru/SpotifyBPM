import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { useHistory } from "react-router-dom"
import axios from 'axios'

/* function to extract authorization token from URL */
export const getTokenFromUrl = (hash) => {
    const accessToken = hash.substring(1);
    const paramsInUrl = accessToken.split('&');
    const paramsSplit = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split('=');
        accumulater[key] = value;
        return accumulater;
    }, {});
    return paramsSplit;
}

const q = document.getElementById('query');

export default function HomeAuth() {

    const search_song = async () => {
        const url = 'https://api.spotify.com/v1/search';
        const searchQuery = document.getElementById('song_query').value;
        const typeQuery = `type=track`;
        const { data } = await axios.get(`${url}?q=${searchQuery}&${typeQuery}`, {
            headers: {
                Authorization: `Bearer ${localStorage.accessToken}`,
            }
        });
        console.log(data);
    }

    useEffect(() => {
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type,
            } = getTokenFromUrl(window.location.hash);
            console.log({ access_token });
            window.location.hash = "login=True";
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    });

    return (
        <div>
            <input type="search" id="song_query"
                placeholder="Search..."></input>
            <button onClick={search_song} style={{ backgroundColor: '#1DB954' }}>
                Submit
            </button>
        </div>
    );
}