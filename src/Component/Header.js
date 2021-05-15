import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { Button } from './Button'
import "./Header.css"
import { useAuth } from "../Context/AuthContext"

function Header() {
    
    const [clickMenu, setClickMenu] = useState(false)
    // const [button, setButton] = useState(true)

    const closeMobileMenu =()=> setClickMenu(false)

    const MobileMenuLogout=()=>{
        closeMobileMenu()
        logout()
    }

    const {currentUser, logout} =useAuth()

    const handleLogout =()=>{
        logout()
        .then(()=>(alert("successfully logout")))
        .catch((error)=>{
            alert(error.message)
        })

        
    }
    // const showButton =()=> {
    //     if (window.innerWidth <= 960){
    //         setButton(false)
    //     }
    //     else{
    //         setButton(true)
    //     }
    // }

    // useEffect(()=>{
    //     showButton()

    // },[])

    // window.addEventListener("resize", showButton)

    
    return (
        <>
            <nav className="nav_bar">
                <div className="navbar_container">
                    <Link to="/" className="nav_bar_logo" onClick={closeMobileMenu}>
                        AutoCar
                        <i className="fas fa-car"></i>
                    </Link>
                    <div className="menu_icon" onClick={()=>{setClickMenu(!clickMenu)}}>
                        <i className={clickMenu ? "fas fa-arrow-left": "fas fa-bars"}></i>
                    </div>
                    <ul className={clickMenu? "nav-menu active":"nav-menu"}>
                        <li className="nav_item">
                            <Link to="/"  className="nav_links" onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/carlist" className="nav_links" onClick={closeMobileMenu}>
                            Car List
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to={currentUser?"/sellcar":"/sellcarinfo"} className="nav_links" onClick={closeMobileMenu}>
                            Sell Car
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/about" className="nav_links" onClick={closeMobileMenu}>
                            Contact
                            </Link>
                        </li>
                        <li className="nav_links-mobile">
                            {!currentUser?
                            <Link to="/login" className="nav_links" onClick={closeMobileMenu}>
                            Sign up
                            </Link>:
                            <Link to="/" className="nav_links" onClick={MobileMenuLogout}>
                            Log out
                            </Link>
                            }
                        </li>
                    </ul>
                    <span className="nav_bar_email">{currentUser&&currentUser.email}</span>
                    {currentUser?
                    <div className="nav_bar_login" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> </div>:
                    <Button buttonStyle="btn--outline" location="/login">LOGIN</Button>}
                 
                </div>
            </nav>
        </>
    )
}

export default Header
