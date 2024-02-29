import { createContext, useContext, useState } from "react";

export const DrawerContext = createContext({
    isOpen: false,
    setOpen: ()=>{},
});

export const DrawerProvider = ({children}) =>{
    const [isOpen, setOpen] = useState(false);
    return <DrawerContext.Provider value={{isOpen, setOpen}}>
        {children}
    </DrawerContext.Provider>
}

export const useCostumeDrawerContext = ()=> useContext(DrawerContext);
