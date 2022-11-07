//import { useEffect } from "react";
//import { Router } from "react-router-dom";
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";
var Spotify = require('spotify-web-api-js');

// Setting up wrapper
var spotify = new Spotify();
var api = new SpotifyWebApi();

api.setAccessToken(localStorage.getItem('accessToken'));

// Function to parse through each user saved song
export const getSongByTempo = async () => {
    // Get track id using liked_songs
    const data = liked_songs();
    const len = Object.keys(data.items).length;

    // Can get track id using items[n].track.id
    // For each song id, getAudioAnalysis and extract tempo
    // If tempo is within range of user input, then put into list
    for(i = 0; i < len; i++){
        const tempo = getAudioAnalysis(data.items[i].track.id);
        if(tempo == input_tempo){
            //Get data.items[i].track.id and put into playlist
            return;
        }
    }
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