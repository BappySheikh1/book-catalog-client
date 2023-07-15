import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import BookDetails from "../pages/BookDetails";
import Books from "../pages/Books";
import Home from "../pages/Home";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import AddBook from "../pages/AddBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
