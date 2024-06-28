import React, { useState } from 'react';

const HoverableBox = ({ normalImg, hoverImg, title, description, linkText , extra}) => {
  const [imageSrc, setImageSrc] = useState(normalImg);

  const handleMouseEnter = () => {
    setImageSrc(hoverImg);
  };

  const handleMouseLeave = () => {
    setImageSrc(normalImg);
  };

  return (
    <div className="box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="upper">
        <div className="img">
          <img src={imageSrc} alt="Hoverable" />
        </div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <p>{extra}</p>
      </div>
      <a href="">{linkText}</a>
    </div>
  );
};

export default HoverableBox;
