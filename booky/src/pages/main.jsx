import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { DrawerCostume } from "../chakra/Drawer";

const Main = ()=>{
    return <>
        <Nav />
        <DrawerCostume />
        <Outlet />
    </>
}

export default Main;
