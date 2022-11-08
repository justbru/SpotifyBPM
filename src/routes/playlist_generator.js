//import { useEffect } from "react";
//import { Router } from "react-router-dom";
import axios from 'axios';
import { liked_songs } from './home_auth';

// Get username so we can use it in createPlaylist
export const getUserId = async () => {
    const url = 'https://api.spotify.com/v1/me';
    const { data } = await axios.get(url, {
        headers : {
            Authorization: `Bearer ${localStorage.accessToken}`,
        }
    });
    return data.id;
}

// Creates an empty playlist
export const createPlaylist = async () => {
    const url = 'https://api.spotify.com/v1/users/' + getUserId() + '/playlists';
    const { data } = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
        }
    })
}

// Function to parse through each user saved song
export const getSongByTempo = async () => {
    // Get track id using liked_songs
    const liked = liked_songs();
    liked.then(function(data){
        const len = data.items.length;
        let i = 0;
        // Can get track id using items[n].track.id
        // For each song id, getAudioAnalysis and extract tempo
        // If tempo is within range of user input, then put into list
        while(i < len){
            const tempo = getAudioAnalysis(data.items[i].track.id);
            console.log(data.items[i].track.id)
            tempo.then(function(tempo) {
                //console.log(tempo)
                const min = tempo - 5;
                const max = tempo + 5;
                if(min <= document.getElementById('userTempo') && max >= document.getElementById('userTempo')){
                    console.log(data.items[i].track.id)
                }
            })
            i++;
        }
    })
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

export default function PlaylistGenerator() {
    return (
        <html>
            <div class="playlist-generator screen">
                <h1 className="home-header">
                    <svg width="50" height="43" viewBox="0 -12 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 42C34.4819 42 43.7898 32.598 43.7898 21C43.7898 20.1962 43.7451 19.4029 43.658 18.6225L38.9425 19.903L35.8553 25.3C35.836 25.3369 35.8159 25.3736 35.7951 25.41C34.9078 26.9611 32.9467 27.4949 31.4149 26.6024C29.883 25.7099 29.3605 23.729 30.2477 22.1779L30.2618 22.1536L30.261 22.1532L34.6984 14.3959L34.6968 14.3898L41.9778 12.4127C38.728 5.09608 31.4532 0 23 0C11.5182 0 2.21027 9.40202 2.21027 21C2.21027 22.9999 2.48703 24.9346 3.00399 26.767C2.97617 26.6674 2.94903 26.5675 2.92256 26.4672C2.6208 25.3239 2.41905 24.1772 2.31188 23.0363L7.36872 21.6632L10.4561 16.266C10.4753 16.2292 10.4954 16.1925 10.5162 16.1561C11.4035 14.6051 13.3646 14.0712 14.8964 14.9638C16.4283 15.8563 16.9508 17.8372 16.0635 19.3883L16.0495 19.4126L16.0503 19.413L11.6128 27.1703L11.6144 27.1764L3.88651 29.2749C7.06602 36.7584 14.427 42 23 42ZM15.835 33.5973C14.3095 32.7087 13.7888 30.7371 14.6722 29.1935L26.1223 9.1842C27.0057 7.64057 28.9584 7.10951 30.484 7.99804C32.0095 8.88658 32.5301 10.8582 31.6468 12.4019L20.1967 32.4111C19.3133 33.9548 17.3605 34.4858 15.835 33.5973Z" fill="black" />
                    </svg>
                    SpotiGo
                </h1>
                <div class="playlist-art">
                    <div class="text-1">+</div>
                </div>
                <div class="flex-col">
                    <div class="title-1">
                        <div class="title-2 opensans-bold-white-45px">Title</div>
                        <div class="rectangle-13"></div>
                    </div>
                    <div class="flex-row">
                        <div class="bpm">
                            <div class="bpm-1 opensans-bold-white-45px">BPM</div>
                            <div class="rectangle-13-1"></div>
                        </div>
                        <div class="length">
                            <div class="length-1 opensans-bold-white-45px">Length</div>
                            <div class="overlap-group2">
                                <div class="optional opensans-normal-white-27px">[optional]</div>
                            </div>
                        </div>
                    </div>
                    <div class="overlap-group">
                        <div class = "description opensans-bold-white-45px">Description</div>
                        <div class="rectangle-13-2"></div>
                        <div class="optional-1 opensans-normal-white-27px">[optional]</div>
                    </div>
                    <div class="genre-one">
                        <div class="genre opensans-bold-white-45px">Genre One</div>
                        <div class="rectangle-13-3"></div>
                    </div>
                    <div class="genre-two">
                        <div class="overlap-group1">
                            <div class="optional opensans-normal-white-27px">[optional]</div>
                        </div>
                    </div>
                    <div class="create-button">
                        <div class="create">Create</div>
                    </div>
                </div>
            </div>
        </html>
    );
}