import React, { useContext } from "react";
import { context } from "../context/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSound from "use-sound";
import alertAudio from "./alert.mp3";
import errorAudio from "./error.mp3";

const Form = () => {
  const [play] = useSound(alertAudio);
  const [error] = useSound(errorAudio);
  const { formData, setFormData, allData, setAllData } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.unit === "" || formData.price === "") {
      error();
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
      setAllData([...allData, formData]);
      play();

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
