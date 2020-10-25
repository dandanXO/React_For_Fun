import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
function Navigation(params) {
  return(
  <nav>
    <FontAwesomeIcon
      icon={faBars}
    />
  </nav>
  )
}

export default Navigation