import {createBrowserRouter} from "react-router-dom";
import Main from "../pages/main";
export const routerconfig = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{
        path: "/",
        element: 'z'
    }]
  }
]);
