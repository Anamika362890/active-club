import React from 'react';
import './BreakTime.css'

const BreakTime = (props) => {
    const { values } = props;
    let time = 0;
    for (const BreakTime of values) {
        time = BreakTime.Btime;
    }
    return (

        <div className='BExercise-time'>
            <div>
                <p >Break Time:</p>
            </div>
            <div className='Bp-time'>
                {time} second

            </div>
        </div>
    );
};

export default BreakTime;