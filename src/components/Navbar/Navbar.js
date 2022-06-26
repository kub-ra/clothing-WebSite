import {  Link } from "react-router-dom";
import './style.css';
import React from 'react';
import {ReactComponent as ReactLogo} from '../images/list.svg'
function Navbar  ()  {
  return (
      <div>
          <nav className="Navbar w-100">
          <Link  className="text-decoration-none text-light App-logo" to="/">MyButiQ</Link>
          <input type="checkbox" className="" id="toggler"/>
          <label for="toggler" className=""><ReactLogo/></label>
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