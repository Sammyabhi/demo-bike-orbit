import { createContext, useContext, useState } from "react";

export const bikeColors = [
  {
    color: "#FF0000",
    name: "RED",
  },
  {
    color: "#0000FF.",
    name: "BLUE",
  },
 
  {
    color: "#222222",
    name: "BLACK",
  },
  {
    color: "#ececec",
    name: "WHITE",
  },
];



const CustomizationContext = createContext ({});

export const CustomizationProvider = (props) => {
    const [bikeColor, setBikeColor] = useState(bikeColors[0]);

    return (
    <CustomizationContext.Provider value={{
        bikeColors,
        bikeColor,
        setBikeColor
    }}>
        {props.children}
    </CustomizationContext.Provider>
    );
};


export const useCustomization =  () => {
    const context = useContext (CustomizationContext);
    return context;
};