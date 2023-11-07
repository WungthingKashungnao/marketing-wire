import React, { useContext, useState } from "react";
import { context } from "../context/ContextApi";
// import ReactToPrint from "react-to-print";
import Invoice from "./Invoice";

const Cart = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const { allData, setAllData, totalPrice } = useContext(context);

  const handleUpdate = (digit, items) => {
    let index = -1;
    allData.forEach((data, idx) => {
      if (data.name === items.name) {
        index = idx;
      }
    });
    const temp = allData;
    if (digit === +1) {
      temp[index].unit++;
    } else if (digit === -1) {
      temp[index].unit--;
    }

    if (temp[index].unit === 0) {
      temp[index].unit = 1;
    }

    setAllData([...temp]);
  };
  const handleDelete = (items) => {
    const temp = allData.filter((val) => val.name !== items.name);
    setAllData(temp);
  };

  return (
    <div className="flex flex-col py-3 overflow-y-auto h-[93vh] mt-[7vh] justify-start items-center  w-[100%] relative">
      <h1 className="font-bold text-[2.5rem] my-3 text-white">Item List</h1>
      <div
        onClick={() => setShowInvoice(true)}
        className="font-bold py-1 px-2 cursor-pointer rounded-lg bg-emerald-500 text-[1.5rem] my-1 text-white"
      >
        Show Invoice
      </div>
      {allData &&
        allData?.map((items, idx) => (
          <div
            key={idx}
            className="flex flex-col my-2 rounded-lg shadow-md shadow-slate-800 w-[70%] md:w-[50%] py-2 px-4 hover:bg-indigo-500 relative"
          >
            <div className="py-3 flex flex-col justify-center items-center">
              <h2 className="text-white font-medium md:text-[1.2rem]">
                Item Name: {items.name}
              </h2>
              <div className="text-white font-medium md:text-[1.2rem]">
                Item Unit:
                <button
                  onClick={() => handleUpdate(+1, items)}
                  className=" px-2 rounded-md font-bold  text-white  bg-emerald-500"
                >
                  +
                </button>
                <span className="mx-2">{items.unit}</span>
                <button
                  onClick={() => handleUpdate(-1, items)}
                  className=" px-2 rounded-md font-bold  text-white  bg-emerald-500"
                >
                  -
                </button>
              </div>
              <div className="text-white font-medium md:text-[1.2rem]">
                Single Item Price: {items.price}
              </div>
              <div className="text-white font-medium md:text-[1.2rem]">
                {items.name} Item Price: {items.price * items.unit}
              </div>
            </div>
            <div
              onClick={() => handleDelete(items)}
              className="absolute top-[-10px] right-[-10px] rounded-full bg-black text-white text-[0.9rem] font-bold h-[20px] w-[20px] flex justify-center items-center cursor-pointer"
            >
              X
            </div>
          </div>
        ))}
      <div className="mb-2 shadow-lg shadow-slate-700 w-[40%] rounded-md bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500  py-4 mt-4 flex justify-center items-center text-white font-medium md:text-[1.2rem]">
        Total: Rs {totalPrice}
      </div>

      {showInvoice && <Invoice setShowInvoice={setShowInvoice} />}
    </div>
  );
};

export default Cart;
