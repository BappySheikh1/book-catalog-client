import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setUser } from "../redux/features/user/userSlice";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()

  const {wishList,readBooks} =useAppSelector(state=>state.wish)

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
            <img src="https://i.ibb.co/HNv73Fb/IZVNvp-F-removebg-preview.png" className="w-[100px] h-[60px]" alt="" />
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
                <li className="relative">
                  <Link to="/wishlist">
                      WishList
                     <span className="absolute top-0 right-2">{wishList.length}</span>
                    </Link>
                </li>
                <li className="relative">
                  <Link to="/readbook">
                      ReedBook
                     <span className="absolute top-0 right-2">{readBooks.length}</span>
                    </Link>
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
