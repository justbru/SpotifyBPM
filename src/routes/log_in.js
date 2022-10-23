import styled from "styled-components";
import background from "../assets/login_background.png"

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

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 20px 45px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 330px 575px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "blue"
};

function clickMe() {
    alert("You clicked me!");
}

/* Setup for Spotify API Auth */
const client_id = '27240f6fd5374a14bd84f3598ed0725c';
const auth_endpoint = 'https://accounts.spotify.com/authorize';
const redirect_url = 'http://localhost:3000';
const scope = 'user-read-email user-read-private user-top-read';

const styles = {
    container: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};


export default function App() {
    const handleLogin = () => {
        window.location = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}&response_type=token&show_dialog=true`
    };
    return (
        <>
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
                <Button onClick={handleLogin}>Login with Spotify</Button>
            </div>
        </>
    );
}