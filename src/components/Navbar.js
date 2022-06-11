import {  Link } from "react-router-dom";
import '../App.css';
function Navbar  ()  {
  return (
      <div>
          <nav className="Navbar w-100">
          <Link  className="text-decoration-none text-light logo" to="/">MyButiQ</Link>
          <input type="checkbox" className="" id="toggler"/>
          <label for="toggler" className=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></label>
          <div className="menu">
            <ul className=" list ">
              <li><Link  className="text-decoration-none text-light" to="/category">Category</Link></li>
              <li><Link  className="text-decoration-none text-light" to="/">Sepetim</Link></li>
              <li><Link  className="text-decoration-none text-light" to="/">Giriş Yap</Link></li>
            </ul>
            </div>
          </nav>
      </div>
  );
};
export default Navbar;