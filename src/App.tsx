/* eslint-disable @typescript-eslint/no-unsafe-call */
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hook";
import { useEffect } from 'react';
import { auth } from "./lib/firebase";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
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
