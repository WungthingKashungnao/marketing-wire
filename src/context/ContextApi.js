import { createContext, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  //   state to hanlde form data
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    price: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const [allData, setAllData] = useState([]); //state to handle all data in local storage

  return (
    <context.Provider
      value={{
        formData,
        setFormData,
        allData,
        setAllData,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default ContextApi;
