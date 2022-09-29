import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <div className='navBody'>
                    <h1 className='icon'><FontAwesomeIcon icon={faPersonRunning}></FontAwesomeIcon></h1>
                    <h1 >Good Time Gaming Active Club</h1>
                </div>



            </div>
        </div>
    );
};

export default Navbar;