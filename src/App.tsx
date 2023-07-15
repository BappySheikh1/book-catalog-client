import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
