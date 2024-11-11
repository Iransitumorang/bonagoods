import React from "react";

const Image = ({ imgSrc, className }) => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #FDC830, #F37335)' }}>
      <img className={className} src={imgSrc} alt={imgSrc} />
    </div>
  );
};

export default Image;
