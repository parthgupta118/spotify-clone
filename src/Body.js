import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";

function Body({ spotify }) {
  const [{ playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={playlist?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>{playlist?.name}</h1>
          <p>
            I don't know how many of you are actually listening to this
            playlist, but I'll write a summary anyway. I like to listen to a
            wide mix of music; Alternative, Rock, EDM, and mostly indie music.
            If that's your style than you will probably enjoy this playlist.
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayArrowIcon className="body__shuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div className="song__list">
          {playlist?.tracks?.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
