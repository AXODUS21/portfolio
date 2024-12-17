import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#3d3d3d");
  const [bgColor, setBgColor] = useState("black");


  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor, bgColor, setBgColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  console.log("Color context:", context); // Add this line
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
