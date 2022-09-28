import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='navBody'>
                <h1 ><FontAwesomeIcon icon={faPersonRunning}></FontAwesomeIcon></h1>
                <h1 >Good Time Gaming Active Club</h1>
            </div>



        </div>
    );
};

export default Navbar;