import "./Nav.css"
import { NavLink } from "react-router-dom";

const Nav = () => {
  return(

<>
<nav>
<h1>website</h1>

<ul className="nav_list" >
    <li> <NavLink className={({isActive}) => isActive ? "nav_link  nav_link_active " : "nav_link" }  to="/"> Home </NavLink> </li>
    <li> <NavLink className={({isActive}) => isActive ? "nav_link  nav_link_active " : "nav_link" }  to="Admin" > Admin </NavLink> </li>        
</ul>
</nav>
<div>
  
</div>
</>


  ) 
};

export default Nav;
