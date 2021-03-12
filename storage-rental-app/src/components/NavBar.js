import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
    
    return(
        <Navbar bg="dark" variant="dark">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Storage Unit Manager</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><NavLink to='/storageunits'>units</NavLink></li>
                        <li><NavLink to='/addrentalunit'>add new units</NavLink></li>
                        <li><NavLink to='/rentalform'>rental form</NavLink></li>
                    </ul>
                </div>
            </nav>
        </Navbar>
    )
}

export default NavBar