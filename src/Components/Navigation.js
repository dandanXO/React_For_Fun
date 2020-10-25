import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
function Navigation(params) {
  const [showMenu, setShowMenu] = useState(false)
  let menu 
  let menuMask
  if(showMenu){
    menu = <div
      className="fixed bg-white top-0 w-4/5  left-0 h-full z-50 shadow"
      >This is menu</div>
    menuMask = <div
      className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
      onClick={()=>{
        return setShowMenu(false)
      }}
      >
     
    </div>
  }
  return(
  <nav>
    <FontAwesomeIcon
      icon={faBars}
      onClick={()=>{
        return setShowMenu(!showMenu)
      }}
    />
    {menuMask}
    {menu}
  </nav>
  )
}

export default Navigation