import React from "react";

function PinImage({ imageUrl }) {
  return (
    <figure>
      <img id="pin-image" src={imageUrl} alt="" />
    </figure>
  );
}

export default PinImage;
