import React from 'react';
import { Suspense, lazy } from 'react';
import './Home.css';

import Header from './Header';

import FeaturedPlaylist from './FeaturedPlaylist';

// const FeaturedPlaylist = React.lazy( () => import('./FeaturedPlaylist'));

function Home({ spotify }) {

    return (
        <div className="home">
            <Header spotify={spotify} />

            <FeaturedPlaylist spotify={spotify} title="Playlist Featured" featured={true}/>
        </div>
    )
}

export default Home;
