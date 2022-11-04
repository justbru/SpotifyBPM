//import { useEffect } from "react";
//import { Router } from "react-router-dom";
//import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";
var Spotify = require('spotify-web-api-js');

// Setting up wrapper
var spotify = new Spotify();
var api = new SpotifyWebApi();

api.setAccessToken(localStorage.getItem('accessToken'));

// Function to parse through each user saved song
export const parseTracks = async () => {
    // Get track id using search_song and store them into db?
    // For each song id, getAudioAnalysis and extract tempo
    // If tempo is within range of user input, then put into list
}

// Function to get track tempo
export const getAudioAnalysis = async (track_id) => {
    const url = 'https://api.spotify.com/v1/audio-analysis/' + track_id; // need to instantiate track_id
    const { data } = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
        }
    });
    return data.track.tempo;
}