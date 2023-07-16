import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import BookDetails from "../pages/BookDetails";
import Books from "../pages/Books";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AddBook from "../pages/AddBook";
import UpdateBook from "../pages/UpdateBook";
import WishList from "../pages/wishList";

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
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
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
