import React, { useContext, useEffect } from "react";
import { context } from "../context/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { formData, setFormData, localData, allData, setAllData } =
    useContext(context);

  useEffect(() => {
    if (localData.length === 0) {
      localStorage.setItem("items", JSON.stringify(allData));
    } else if (localData.length >= 1) {
      localStorage.setItem("items", JSON.stringify(allData));
    }
  }, [allData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.unit === "" || formData.price === "") {
      toast("🦄 All Input Fields Are Required!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (localData.length === 0) {
        setAllData([...allData, formData]);
      } else if (localData.length >= 1) {
        setAllData([...localData, formData]);
      }

      toast.success("Successfully Added Item", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <form
      className="flex flex-col  justify-center items-center gap-3 m-auto"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="text-white text-[1.3rem] block">
          Enter Item Name:
        </label>
        <input
          type="text"
          className="border-0 outline-none px-2 py-1 rounded-md mt-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="text-white text-[1.3rem] block">
          Enter Item Unit
        </label>
        <input
          type="number"
          min={1}
          className="border-0 outline-none px-2 py-1 rounded-md mt-2"
          value={formData.unit}
          onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
        />
      </div>
      <div>
        <label className="text-white text-[1.3rem] block">
          Item Price Per Unit
        </label>
        <input
          type="number"
          min={1}
          className="border-0 outline-none px-2 py-1 rounded-md mt-2"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
        />
      </div>
      <button className="bg-emerald-500 px-4 py-2 text-white font-bold rounded-md">
        Save
      </button>
      <ToastContainer />
    </form>
  );
};

export default Form;
