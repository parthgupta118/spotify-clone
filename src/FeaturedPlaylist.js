import React, { useEffect } from "react";
import "./FeaturedPlaylist.css";

import { useDataLayerValue } from "./DataLayer";
import Playlist from "./Playlist";

function FeaturedPlaylist({ spotify, ctg, title, featured }) {
  const [{ playlists, category }, dispatch] = useDataLayerValue();

  if (!featured) {
    spotify.getCategoryPlaylists(ctg, { limit: 1 }).then((response) => {
      dispatch({
        type: "SET_CATEGORY",
        category: response,
      });
    });
  }

  return (
    <div className="featuredPlaylist">
      <div className="heading">{title}</div>
      <div className="seeAll">see all</div>
      <div className="featuredPlaylist__container">
        {playlists?.items?.map((playlist) => (
          <Playlist
            list={playlist}
            title={playlist.name}
            pic={playlist.images}
            spotify={spotify}
            key={playlist.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedPlaylist;

// Code for showing categories and featured playlist

{
  /* {featured
          ? playlists?.items
              ?.filter((playlist, index) => {
                return index < 6 ? playlist : false;
              })
              .map((playlist) => (
                <Playlist
                  list={playlist}
                  title={playlist.name}
                  pic={playlist.images}
                  spotify={spotify}
                  key={playlist.id}
                />
              ))
          : category?.items
              ?.filter((playlist, index) => {
                return index < 1 ? playlist : false;
              })
              .map((playlist) => (
                <Playlist
                  list={playlist}
                  title={playlist.name}
                  pic={playlist.images}
                  spotify={spotify}
                  key={playlist.id}
                />
              ))} */
}
