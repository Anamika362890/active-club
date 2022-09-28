import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ActivitiesInfo.css'
import picture from './picture.jpg'


const ActivitiesInfo = () => {
    return (
        <div className='profile'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div className='profile-info'>
                <h3>Anamika Goswami</h3>
                <div className='location'>
                    <div>
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    </div>
                    <div>
                        <p>Dhaka,Bangladesh</p>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default ActivitiesInfo;