import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer" style={{ background: 'linear-gradient(135deg, #FDC830, #F37335)' }}>
      {text}
    </div>
  );
};

export default Badge;
