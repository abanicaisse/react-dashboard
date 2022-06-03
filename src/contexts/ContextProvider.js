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
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
