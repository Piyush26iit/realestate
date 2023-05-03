import React, { useState } from 'react'
import Logo from "./image/logo.png"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from "react-icons/fa"
import "./nav.css"

export const Navbar = () => {

    const [navlist , setnavlist] = useState(false)

   const nav = [
    {
        text:"home",
        path:"/",
    },
    {
        text:"about",
        path:"/about",
    },
    {
        text:"services",
        path:"/services",
    },
    {
        text:"contact",
        path:"/contact",
    },

   ]


 


  return (
  <>
    <header>
        <div className=" flex header">
            <div className="log">
                <img src={Logo} alt="logo" />
            </div>
            <div className="nav">
                <ul className={navlist ? "small" :'flex'}>
                    {nav.map((list,index)=>(
                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="logop flex">
            <div className="button flex">
                <button>Sign In</button>
            </div>
            <div className="button flex">
                <button>Sign Up</button>
            </div>
            </div>
            <div className="toggle">
            <button className="tobutton" color='#27ae60' onClick={()=>{setnavlist(!navlist)}}>

               { navlist ?<FaTimes fontSize='22px' /> : <GiHamburgerMenu  fontSize='22px'  />}
                </button>
            </div>
        </div>
    </header>
  </>
  )
}
