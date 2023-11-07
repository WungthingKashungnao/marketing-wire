import { useContext, useRef } from "react";
import { context } from "../context/ContextApi";
import ReactToPrint from "react-to-print";

const Invoice = ({ setShowInvoice }) => {
  const { allData, totalPrice } = useContext(context);
  const componentRef = useRef();

  return (
    <div className="absolute top-0 right-0 w-full h-full  flex flex-col justify-start items-center ">
      <ReactToPrint
        trigger={() => (
          <button className="relative border border-white shadow-lg shadow-slate-700 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500  text-white font-bold px-3 py-2 my-2 rounded-md">
            Print Invoice
          </button>
        )}
        content={() => componentRef.current}
      />

      <div
        ref={componentRef}
        className=" relative  bg-white text-black flex flex-col justify-center items-center my-2   w-[70%] md:w-[30%] py-2 px-4 rounded-xl "
      >
        <h1 className="font-bold text-[2rem]">Your Invoice</h1>
        {allData &&
          allData.map((items, idx) => (
            <div>
              {
                <p>
                  <span className="font-bold">Item name:</span> {items.name}
                </p>
              }
              {
                <p>
                  <span className="font-bold">Item Unit:</span> {items.unit}
                </p>
              }
              {
                <p>
                  {" "}
                  <span className="font-bold">Single Item Price:</span>{" "}
                  {items.price}
                </p>
              }
              {
                <p>
                  <span className="font-bold">{items.name} item Total:</span>{" "}
                  {items.unit * items.price}
                </p>
              }
              <hr className=" border-2 border-black  font-bold" />
            </div>
          ))}
        <div className="font-bold text-[1.5rem]">Total Price: {totalPrice}</div>

        <div
          onClick={() => setShowInvoice(false)}
          className=" cursor-pointer w-[30px] h-[30px] absolute top-[-15px] right-[-15px] bg-red-800 rounded-full text-white font-bold flex justify-center items-center"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Invoice;
