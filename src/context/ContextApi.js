import { createContext, useEffect, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  //   state to hanlde form data
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    price: "",
  });

  const getTotal = () => {
    let total = 0;
    allData.map((val) => (total += val.unit * val.price));
    setTotalPrice(total);
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const [allData, setAllData] = useState([]); //state to handle all data in local storage

  useEffect(() => {
    getTotal();
  }, [allData]);

  return (
    <context.Provider
      value={{
        formData,
        setFormData,
        allData,
        setAllData,
        totalPrice,
        setTotalPrice,
        getTotal,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default ContextApi;
