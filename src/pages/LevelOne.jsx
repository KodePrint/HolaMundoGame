import React from 'react';
import LevelOneStyles from '../styles/LevelOne.css'



const LevelOne = () => {
    return (
        <div className='LevelOne'>
            <div className='enemy-area'>
                <p>Enemy</p>
            </div>
            <div className="player-area">
                <p>Plyer</p>
            </div>
        </div>
    );
}

export default LevelOne;