import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./privateRoutes";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import BookDetails from "../pages/BookDetails";
import Books from "../pages/Books";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/book-details/:id",
        element:<BookDetails />,
      },
      {
        path: "/checkout",
        element: <PrivateRoute>{/* <Checkout /> */}</PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
