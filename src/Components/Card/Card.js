import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, details, time, age, img } = props.game;
    return (
        <div>
            <div className='game'>
                <img src={img} alt=""></img>
                <div className='Activity-details'>
                    <h2>{name}</h2>
                    <p>{details.slice(0, 60)}..</p>
                    <p ><small className='p-tag'>For age:</small> {age}</p>
                    <p ><small className='p-tag'>Time required: </small> {time} minutes </p>
                    <button onClick={() => props.handleAddToList(props.game)} className='btn'>Add To List</button>

                </div>
            </div>
        </div>
    );
};

export default Card;