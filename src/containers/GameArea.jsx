import React from 'react'
import GameAreaStyles from '../styles/GameArea.css'
import EnemyArea from './EnemyArea';
import Hero from '../components/Hero';
import gameLogic from '../helpers/gameLogic'

const GameArea = ({shootState}) => {
    return (
        <div className="GameArea">
            <EnemyArea/>
            <Hero shoots={shootState}/>
        </div>
    );
}

export default GameArea;