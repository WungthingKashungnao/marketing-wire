import React, { useContext } from "react";
import { context } from "../context/ContextApi";

const Cart = () => {
  const { localData } = useContext(context);
  return (
    <div className="flex flex-col py-3 overflow-y-auto h-[93vh] mt-[7vh] justify-start items-center  w-[100%]">
      <h1 className="font-bold text-[2.5rem] my-3 text-white">Item List</h1>
      {localData &&
        localData?.map((items, idx) => (
          <div
            key={idx}
            className="flex flex-col my-2 shadow-lg w-[70%] md:w-[50%] py-2 px-4 hover:bg-indigo-500"
          >
            <div className="py-3 flex flex-col justify-center items-center">
              <h2 className="text-white font-medium md:text-[1.2rem]">
                Item Name: {items.name}
              </h2>
              <div className="text-white font-medium md:text-[1.2rem]">
                Item Unit {items.unit}
              </div>
              <div className="text-white font-medium md:text-[1.2rem]">
                Item Price {items.price}
              </div>
            </div>
          </div>
        ))}
      <div className="w-[40%] bg-emerald-500 py-4 mt-4 flex justify-center items-center text-white font-medium md:text-[1.2rem]">
        Total
      </div>
    </div>
  );
};

export default Cart;
