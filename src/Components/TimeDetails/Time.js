import React from 'react';
import './Time.css'

const Time = (props) => {
    const { time } = props;
    console.log(time);
    let total = 0;
    for (const game of time) {
        total = total + game.time;
    }

    return (
        <div>
            <h1>Personal info{time.length}</h1>
            <h2>Exercise Details</h2>
            <div className='Exercise-time'>
                <div>
                    <p>Exercise Time:         </p>
                </div>
                <div>
                    <p>{total} minute</p>
                </div>
            </div>
            <div className='Exercise-time'>
                <div>
                    <p >Break Time:</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Time;