import React, { useState } from 'react';

const HoverImage = ({ defaultSrc, hoverSrc, alt, link }) => {
  const [imageSrc, setImageSrc] = useState(defaultSrc);

  const handleMouseEnter = () => {
    setImageSrc(hoverSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(defaultSrc);
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{}}>
      <img
        src={imageSrc}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </a>
  );
};

export default HoverImage;
