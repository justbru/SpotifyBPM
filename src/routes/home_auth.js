import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { useHistory } from "react-router-dom"
import axios from 'axios'
import Iframe from 'react-iframe'
import "../assets/style.css"


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

// Constant to get a users liked songs
export const liked_songs = async () => {
    const url = 'https://api.spotify.com/v1/me/tracks';
    const { data } = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
        }
    });
    console.log(data);
}

export const search_song = async () => {
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

export default function HomeAuth() {
    useEffect(() => {
        localStorage.clear();
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type,
            } = getTokenFromUrl(window.location.hash);
            console.log({ access_token });
            window.location.hash = "login=True";
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    });

    return (
        <div>
            <h1 className="home-header">
                <svg width="50" height="43" viewBox="0 -12 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 42C34.4819 42 43.7898 32.598 43.7898 21C43.7898 20.1962 43.7451 19.4029 43.658 18.6225L38.9425 19.903L35.8553 25.3C35.836 25.3369 35.8159 25.3736 35.7951 25.41C34.9078 26.9611 32.9467 27.4949 31.4149 26.6024C29.883 25.7099 29.3605 23.729 30.2477 22.1779L30.2618 22.1536L30.261 22.1532L34.6984 14.3959L34.6968 14.3898L41.9778 12.4127C38.728 5.09608 31.4532 0 23 0C11.5182 0 2.21027 9.40202 2.21027 21C2.21027 22.9999 2.48703 24.9346 3.00399 26.767C2.97617 26.6674 2.94903 26.5675 2.92256 26.4672C2.6208 25.3239 2.41905 24.1772 2.31188 23.0363L7.36872 21.6632L10.4561 16.266C10.4753 16.2292 10.4954 16.1925 10.5162 16.1561C11.4035 14.6051 13.3646 14.0712 14.8964 14.9638C16.4283 15.8563 16.9508 17.8372 16.0635 19.3883L16.0495 19.4126L16.0503 19.413L11.6128 27.1703L11.6144 27.1764L3.88651 29.2749C7.06602 36.7584 14.427 42 23 42ZM15.835 33.5973C14.3095 32.7087 13.7888 30.7371 14.6722 29.1935L26.1223 9.1842C27.0057 7.64057 28.9584 7.10951 30.484 7.99804C32.0095 8.88658 32.5301 10.8582 31.6468 12.4019L20.1967 32.4111C19.3133 33.9548 17.3605 34.4858 15.835 33.5973Z" fill="black" />
                </svg>
                SpotiGo
            </h1>
            <div class="home-w-login screen">
                <div class="playlist-list">
                    <div class="playlist-tile">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist-tile-1">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist-tile-1">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist-tile-1">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist-tile-1">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist-tile-1">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist-tile-1">
                        <div class="overlap-group">
                            <div class="album-cover-place-holder">
                                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0dJbxj8JQd9tblCtvE712L?utm_source=generator&theme=0" width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*

This is example code to show how to use buttons for API calls

<input type="search" id="song_query"
                placeholder="Search..."></input>
            <button onClick={search_song} style={{ backgroundColor: '#1DB954' }}>
                Submit
            </button>
            <button onClick={liked_songs} >
                User's Liked Songs
            </button>

*/