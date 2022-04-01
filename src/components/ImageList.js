import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageList = (props) => {
  return (
    <>
      <div className="gallery container mt-4">
        <GridList cellHeight={240} cols={3}>
          {props.images.map((image) => (
            <GridListTile>
              <LazyLoadImage
                // effect="blur"
                width={425}
                key={image.id}
                alt={image.alt_description}
                src={image.urls.small}
              />
              <GridListTileBar
                title={image.description}
                subtitle={image.user.name}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default ImageList;
