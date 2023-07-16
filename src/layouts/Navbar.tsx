import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setUser } from "../redux/features/user/userSlice";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()

  const handleLogOut =()=>{
    signOut(auth).then(()=>{
      dispatch(setUser(null))
    })
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Catalog book
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/books">All Books</Link>
            </li>

            {!user?.email ? (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/wishlist">WishList</Link>
                </li>
                <li>
                  <Link to="/addbook">Add Book</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            )}
            {user?.email && (
              <li>
                <a>{user.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
