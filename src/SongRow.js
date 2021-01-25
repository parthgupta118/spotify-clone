import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track, spotify }) {
  const [, dispatch] = useDataLayerValue();

  const playSong = () => {
    spotify.play();

    dispatch({
      type: "SET_ITEM",
      item: track,
    });

    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  };

  return (
    <div className="songRow" onDoubleClick={playSong}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
