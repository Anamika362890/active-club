import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import './Game.css'
const Game = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);
    return (
        <div>
            <h2 className='heading'>Select Today's Gaming Activity: {games.length}</h2>
            <div className='game-activities'>
                {
                    games.map(game => <GameCard key={game.id} game={game} ></GameCard>)
                }
            </div>


        </div>
    );
};

export default Game;