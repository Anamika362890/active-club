
import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Card from '../Card/Card';
import MyDetails from '../MyDetails/MyDetails';
import MyProfile from '../MyProfile/MyProfile';
import Navbar from '../Navbar/Navbar';
import Question from '../Question/Question';
import Time from '../TimeDetails/Time';
import './Home.css'

const Home = () => {
    const [games, setGames] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);
    const handleAddToList = (game) => {
        console.log(game)
        const newTime = [...time, game]
        setTime(newTime);
    }
    return (
        <div className='main'>
            <div className='home'>
                <div >
                    <Navbar></Navbar>
                    <h1>Gaming Activity {games.length}</h1>


                    <div className='game-activities'>
                        {

                            games.map(game => <Card key={game.id} game={game}
                                handleAddToList={handleAddToList}
                            ></Card>)

                        }
                    </div>



                </div>
                <div className='info'>
                    <MyProfile></MyProfile>
                    <MyDetails></MyDetails>
                    <Break></Break>
                    <h1>Personal info{time.length}</h1>
                    <Time></Time>
                </div>

            </div>
            <Question></Question>
        </div>

    );
};

export default Home;