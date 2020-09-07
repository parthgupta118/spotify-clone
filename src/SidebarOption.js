import React from "react";
import "./SidebarOption.css";
import { NavLink } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";

function SidebarOption({ spotify, list, title, Icon }) {
  const [{ playlist }, dispatch] = useDataLayerValue();

  const showPlaylist = () => {
    spotify.getPlaylist(list?.id).then((response) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlist: response,
      });
    });
  };

  return (
    <div>
      {Icon ? (
        <NavLink to="/" className="sidebarOption">
          <Icon className="sidebarOption__icon" />
          <h4>{title}</h4>
        </NavLink>
      ) : (
        <NavLink
          className="sidebarOption"
          to={`/playlist/${list?.id}`}
          onClick={showPlaylist}
        >
          <p>{title}</p>
        </NavLink>
      )}
    </div>
  );
}

export default SidebarOption;
