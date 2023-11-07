import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center  bg-emerald-400 h-[7vh] w-full  absolute top-0 left-0 ">
      <h1 className="text-white text-[1.7rem] font-bold cursor-pointer">
        Marketing Wire
      </h1>
      <div className="text-white text-[1.7rem] font-bold cursor-pointer">
        Cart
      </div>
    </div>
  );
};

export default Navbar;
