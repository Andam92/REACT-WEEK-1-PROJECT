import React from "react";

function ImgPlaceholder(props) {
  return (
    <img
      className="cover"
      src={props.cardImg}
      /* style={{ height: 120, width: 220 }} */ alt="pla"
    />
  );
}

export default ImgPlaceholder;
