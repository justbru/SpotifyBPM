import { useEffect } from "react";
import { Router } from "react-router-dom";
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";
var Spotify = require('spotify-web-api-js');

// Setting up wrapper
var spotify = new Spotify();
var api = new SpotifyWebApi();

api.setAccessToken(localStorage.getItem('accessToken'));