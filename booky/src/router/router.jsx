import {createBrowserRouter} from "react-router-dom";
import Main from "../pages/main";
import Books from "../pages/books";
import BookDetails from "../pages/BookDetails";
export const routerconfig = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{
        path: "/",
        element: <Books />
    },
    {
        path: "/book/:id",
        element: <BookDetails />
    }]
  }
]);
