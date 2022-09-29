import React from 'react';


const ActivityCard = (props) => {
    const { Btime } = props.breakTime;


    return (
        <div>
            <button >{Btime} s</button>
        </div>
    );
};

export default ActivityCard;