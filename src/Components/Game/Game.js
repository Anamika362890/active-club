import React, { useEffect, useState } from 'react';

const Game = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div>
            <h2>Select Today's Gaming Activity</h2>

        </div>
    );
};

export default Game;