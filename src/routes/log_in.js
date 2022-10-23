import styled from "styled-components";
import background from "../assets/login_background.png"
import "../assets/style.css"

const theme = {
    blue: {
        default: "#1DB954",
        hover: "#191414"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};

/* Setup for Spotify API Auth */
const client_id = '27240f6fd5374a14bd84f3598ed0725c';
const auth_endpoint = 'https://accounts.spotify.com/authorize';
const redirect_url = 'http://localhost:3000';
const scope = 'user-read-email user-read-private user-top-read';

export default function App() {
    const handleLogin = () => {
        window.location = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}&response_type=token&show_dialog=true`
    };
    return (
        <html className="App">
            <head>
                <link rel="stylesheet" href="../assets/style.css" />
            </head>
            <body>
                <header class="login-header">
                    <h1>Spotigo</h1>
                    <h2 className="large-text-login">Discover, Create, and Optimize</h2>
                    <h3 className="large-text-login">Like Never Before</h3>
                    <h4> Explore how Beats Per Minute (BPM) can change</h4>
                    <h4> the way you interact with music</h4>
                </header>
                <div>
                    <button onClick={handleLogin} className="login-button">Login with Spotify</button>
                </div>

            </body>
        </html>
    );
}



/*
<html>
            <link rel="stylesheet" href="css/style.css"></link>
            <div style={{
                backgroundImage: `url(${background})`,
                minWidth: `100%`,
                minHeight: `100%`,
                position: `fixed`,
                marginTop: `-8px`,
                marginLeft: `-8px`,
                backgroundSize: `cover`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `center`
            }}>
                <header id="header">
                    <nav>
                        <div class="container">
                            <div class="text-center">
                                <a href="/" class="nav-brand text-dard">Justin's Surf Rentals</a>
                            </div>
                        </div>
                    </nav>
                </header>
                <h1 font_size="" font="arial">This is bigger text.</h1>
                <Button onClick={handleLogin}>Login with Spotify</Button>
            </div>

        </html>
*/