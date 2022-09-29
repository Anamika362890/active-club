import React from 'react';
import './ActivityCard.css'


const ActivityCard = (props) => {
    const { Btime } = props.breakTime;


    return (
        <div >
            <button className='btn-t'>{Btime} s</button>
        </div>
    );
};

export default ActivityCard;