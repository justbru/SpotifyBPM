import styled from "styled-components";

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
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
  margin: 350px 640px;
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

//create function that takes useraccesstoken and returns it from url
export default function App() {
  const handleLogin = () =>{
    window.location = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}&response_type=token&show_dialog=true`
  };
  return (
    <>
      <div>
        <Button onClick={handleLogin}>Login to Spotify</Button>
      </div>
    </>
  );
}