import React,{useEffect,useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [activetab, setactivetab] = useState("Home");
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname ==="/"){
            setactivetab("Home");
        } else if(location.pathname ==="/add"){
            setactivetab("Adduser");
        } else if(location.pathname ==="/about"){
            setactivetab("About");
        }
    },[location])
  return (
    <div className="header">
        <p className="logo">User Management System</p>
        <div className="header-right">
            <Link to="/">
                <p className={`${activetab === "Home"?"active":""}`} onClick={()=>setactivetab("Home")}>Home</p>
            </Link>
            <Link to="/add">
                <p className={`${activetab === "Adduser"?"active":""}`} onClick={()=>setactivetab("Adduser")}>Adduser</p>
            </Link>
            <Link to="/about">
                <p className={`${activetab === "About"?"active":""}`} onClick={()=>setactivetab("About")}>About</p>
            </Link>
        </div>
    </div>
  )
}

export default Header;