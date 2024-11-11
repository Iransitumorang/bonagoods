import React from "react";

const List = ({ children, className }) => {
  return <ul className={className} style={{ background: 'linear-gradient(135deg, #FDC830, #F37335)' }}>{children}</ul>;
};

export default List;
