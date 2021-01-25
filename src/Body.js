import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import { usePalette } from "react-palette";

function Body({ spotify }) {
  const [{ playlist }] = useDataLayerValue();

  const { data } = usePalette(playlist?.images[0].url);

  return (
    <div className="body" style={{ background: `linear-gradient(${data.darkVibrant}, ${data.vibrant})` }}>
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={playlist?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>{playlist?.name}</h1>
          <p>{playlist?.description}</p>
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
            <SongRow
              draggable="true"
              spotify={spotify}
              track={item.track}
              key={item.track.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
