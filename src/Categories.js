import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import FeaturedPlaylist from "./FeaturedPlaylist";

function Categories({ spotify }) {
    const [{ categories }, ] = useDataLayerValue();

    return (
        <div>
            {categories?.items?.map( (category) => (
            <FeaturedPlaylist spotify={spotify} title={category.name} ctg={category.id} featured={false}/>

        ))}
        </div>
    );

}

export default Categories;