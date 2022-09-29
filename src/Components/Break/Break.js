
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
        let shoppingCart = {};

        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }

        // add quantity
        const quantity = shoppingCart[breakTime.id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[breakTime.id] = newQuantity;
        }
        else {
            shoppingCart[breakTime.id] = 1;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
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