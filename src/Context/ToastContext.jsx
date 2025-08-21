import { createContext, useState } from "react";
import Toast from "../Components/Toast";

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
    setToastVisible(false); 
  }, 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastVisible && <Toast />}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
