import React from "react";

const ListItem = ({ itemName, className }) => {
  return <li className={className} style={{ background: 'linear-gradient(135deg, #FDC830, #F37335)' }}>{itemName}</li>;
};

export default ListItem;
