import React from "react";
import { Outlet, NavLink , } from "react-router-dom";

const Admin = () => {
  return (
  <>    
  
  <div className="login" >
   <div className="sidebar" >
   <h2> <NavLink to="signup" > Proucts </NavLink></h2>
    <h2><NavLink to="login" > Users </NavLink></h2>
   </div>
    <Outlet/>
    </div>

    
    
    
    


  </>
  );
}

export default Admin;
