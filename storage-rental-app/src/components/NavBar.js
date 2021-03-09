import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    
    return(
        <div className='navbar'>
            <NavLink to='/storageunits'>units</NavLink><br/>
            <NavLink to='/addrentalunit'>add new units</NavLink><br/>
            <NavLink to='/rentalform'>rental form</NavLink><br/>
        </div>
    )
}

export default NavBar