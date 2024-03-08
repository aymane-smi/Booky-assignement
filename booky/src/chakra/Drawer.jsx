import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react";
import { useCostumeDrawerContext } from "../context/drawer.context"
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

export const DrawerCostume = ()=>{
    const {isOpen, setOpen} = useCostumeDrawerContext();
    const handleToggle = ()=>{
        setOpen(!isOpen);
    }
    const btnRef = useRef()
    return <Drawer
        isOpen={isOpen}
        placement='left'
        finalFocusRef={btnRef}
        onClose={handleToggle}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton data-cy="close-drawer"/>
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody className="flex flex-col gap-5">
            <Link to="/" className="flex justify-start items-center gap-3">
                <span>
                    <FaCircle size={10} color="black"/>
                </span>
                <span className="font-bold text-[22px]" data-cy="drawer-item">show books</span>
            </Link>
            {/* <Link to="/book/id" className="flex justify-start items-center gap-3">
                <span>
                    <FaCircle size={10} color="black"/>
                </span>
                <span className="font-bold text-[22px]">show book detail</span>
            </Link> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
}
