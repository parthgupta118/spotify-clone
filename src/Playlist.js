import React from "react";
import { NavLink } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";

import "./Playlist.css";

function Playlist({ spotify, list, title, pic }) {
  const [, dispatch] = useDataLayerValue();

  const showPlay = () => {
    spotify.getPlaylist(list?.id).then((response) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlist: response,
      });
    });
  };
  
  return (
    
    <NavLink
      className="playlist"
      to={`/playlist/${list?.id}`}
      onClick={showPlay}
    >
        <div className="playlist__image"><img src={pic[0].url} alt="Playlist" /></div>
        <div className="playlist__info">
          <h3>{title}</h3>
          <p>{list?.description}</p>
        </div>
    </NavLink>
  );
}

export default Playlist;
