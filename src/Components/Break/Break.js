
import React, { useEffect, useState } from 'react';
import ActivityCard from '../ActivitiesCard/ActivityCard';
import BreakTime from '../BreakTime/BreakTime';
import Time from '../TimeDetails/Time';
import './Break.css'



const Break = () => {
    const [breakTimes, setbreakTime] = useState([]);
    const [values, setValue] = useState([]);


    useEffect(() => {
        fetch('breakData.json')
            .then(res => res.json())
            .then(data => setbreakTime(data))
    }, []);
    const handleBreak = (breakTime) => {
        console.log(breakTime)
        const newValue = [...values, breakTime];
        setValue(newValue);



    }

    return (
        <div>
            <div>
                <h2 className='h2'>ADD A BREAK</h2>
                <div className='time'>
                    {
                        breakTimes.map(breakTime => <ActivityCard
                            key={breakTime.id}
                            breakTime={breakTime}
                            handleBreak={handleBreak}
                        ></ActivityCard>)
                    }


                </div>
                <div>
                    <div className='exercise2'>
                        <h2 >Exercise Details</h2>
                    </div>


                    <BreakTime values={values}></BreakTime>

                </div>
            </div>
        </div>
    );
};

export default Break;