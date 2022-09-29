import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <div>
                <h2 className='h2'>ADD A BREAK</h2>
                <div className='time'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>

                </div>
            </div>
        </div>
    );
};

export default Break;