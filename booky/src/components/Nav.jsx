import { Button } from "@chakra-ui/react";
import { FaBookReader } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCostumeDrawerContext } from "../context/drawer.context";

export const Nav = ()=>{
    const {setOpen, isOpen} = useCostumeDrawerContext();
    const handleToggle = ()=>{
        setOpen(!isOpen);
    }
    return <nav className="w-screen flex justify-between items-center h-[70px] shadow-lg px-4 bg-teal-100">
        <FaBookReader size={30} color="#4AC8C1"/>
        <Button colorScheme='teal' size='md' onClick={handleToggle}>
            <GiHamburgerMenu size={30} color="white"/>
        </Button>
    </nav>
}
