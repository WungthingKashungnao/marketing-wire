import { createContext, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    price: "",
  });
  return (
    <context.Provider value={{ formData, setFormData }}>
      {children}
    </context.Provider>
  );
};
export default ContextApi;
