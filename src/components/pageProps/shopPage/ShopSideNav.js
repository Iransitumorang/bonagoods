import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6" style={{ background: 'linear-gradient(135deg, #FDC830, #F37335)' }}>
      <Category icons={false} />
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
