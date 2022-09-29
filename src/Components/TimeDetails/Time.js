import React from 'react';
import './Time.css'

const Time = (props) => {
    const { time } = props;


    let total = 0;
    for (const game of time) {
        total = total + game.time;
    }


    return (
        <div className='exercise'>

            <h2 className='h2'>Exercise Details</h2>
            <div className='Exercise-time'>
                <div>
                    <p>Exercise Time:         </p>
                </div>
                <div className='p-time'>
                    <p>{total} minute</p>
                </div>
            </div>
            <div className='Exercise-time'>
                <div>
                    <p >Break Time:</p>
                </div>
                <div className='p-time'>

                </div>
            </div>
        </div>
    );
};

export default Time;