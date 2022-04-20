import React, { useState, useContext } from 'react';
import LevelOneStyles from '../styles/LevelOne.css'
import GameArea from '../containers/GameArea';
import gameLogic from '../helpers/gameLogic';
import TheGameContext from '../context/TheGameContext';

const LevelOne = () => {
    const {sentShoot, state} = useContext(TheGameContext)
    const logic = gameLogic
    const [shootState, setShootState] = useState(false)
    const [shootsNumber, setshootsNumber] = useState(0)
    const handleShoot = () => {
        setshootsNumber(shootsNumber+1)
        let payload = {'id': shootsNumber, 'state': true}
        sentShoot(payload) 
    }
    console.log(state)
    return (
        <div className='LevelOne' onClick={handleShoot}>
            <GameArea shootState={shootState} />
            <div className="stats">
                <p>Shoots: {shootsNumber}</p>
            </div>
        </div>
    );
}

export default LevelOne;