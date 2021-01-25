import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, categories, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getFeaturedPlaylists().then( ({ playlists }) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // spotify.getCategories({ limit:2 }).then(({ categories } ) =>{
      //   dispatch({
      //     type: "SET_CATEGORIES",
      //     categories: categories
      //   });
      // })
    }

    // console.log(user);
    // console.log(token);
    // console.log(playlists);
    // console.log(playlist);
  });

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
