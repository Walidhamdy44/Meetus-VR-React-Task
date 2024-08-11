import React, { createContext, useState } from "react";

// Create a context
export const Context = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  // State to be shared across the application
  const [items, setItems] = useState([]);

  // Function to update items
  const updateItems = (newItems) => {
    setItems(newItems);
  };

  return (
    <Context.Provider
      value={{
        items,
        updateItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
