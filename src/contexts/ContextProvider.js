import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  // chat Component openned or closed?
  chat: false,
  // cart Component openned or closed?
  cart: false,
  // userProfile Component openned or closed?
  userProfile: false,
  // notification Component openned or closed?
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
