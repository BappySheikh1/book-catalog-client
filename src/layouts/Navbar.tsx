import { Link } from "react-router-dom";

export default function Navbar() {


  return (
    <>
     <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Catalog book</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/books'>All Books</Link></li>
      <li>
        <details>
          <summary>
            Profile
          </summary>
          <ul className="p-2 bg-base-100">
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/signup'>Log Out</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
</>
  )
}
