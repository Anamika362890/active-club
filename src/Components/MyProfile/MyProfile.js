import React from 'react';
import './MyProfile.css'
import picture from '../MyProfile/picture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const MyProfile = () => {
    return (
        <div>
            <div className='profile'>
                <div className='profilePic'>
                    <img src={picture} alt="" />
                </div>
                <div className='profile-info'>


                    <div className='name'>

                        <span>Anamika Goswami</span>
                    </div>

                    <div className='location'>
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                        <small className='place'>Dhaka,Bangladesh</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;