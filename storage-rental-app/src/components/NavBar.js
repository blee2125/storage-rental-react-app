import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    
    return(
        <div className='navbar'>
            <NavLink to='/rentalunits'>units</NavLink><br/>
            <NavLink to='/rentalunits/new'>new/modify units</NavLink><br/>
            <NavLink to='/rentalform'>rental form</NavLink><br/>
        </div>
    )
}

export default NavBar