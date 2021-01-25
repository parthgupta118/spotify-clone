import React from "react";
import "./SidebarOption.css";
import { NavLink } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";

function SidebarOption({ spotify, list, title, Icon }) {
  const [, dispatch] = useDataLayerValue();
  
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

        <div>

          <NavLink exact to={`/${(title === "Home") ? "" : title.toLowerCase()}`} activeClassName="sidebarOption--active" className="sidebarOption">
            <Icon className="sidebarOption__icon" />
            <h4>{title}</h4>
          </NavLink>
        </div>
        ) : (
          <NavLink
            className="sidebarOption"
            activeClassName="sidebarOption__playlist--active"
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
