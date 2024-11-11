import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-3xl font-semibold pb-6" style={{ background: 'linear-gradient(135deg, #FDC830, #F37335)' }}>
      {heading}
    </div>
  );
};

export default Heading;
