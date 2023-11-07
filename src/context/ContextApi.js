import { createContext, useEffect, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  //   const [toggle, setToggle] = useState(false); //to toggle between pages
  // state to hanlde form data
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    price: "",
  });

  const [allData, setAllData] = useState([]); //state to handle all data in local storage
  const [localData, setLocalData] = useState([]); //state to handle local data

  //   udating the data in broswer
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items"));
    setLocalData(data);
  }, [allData]);

  return (
    <context.Provider
      value={{
        formData,
        setFormData,
        localData,
        setLocalData,
        allData,
        setAllData,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default ContextApi;
