import React, { useState } from 'react'
import ShootStyle from '../styles/Shoot.css'

const Shoot = ({sent}) => {
    const [state, setState] = useState(sent)
    return (
        <div className={sent ? 'Shoot eneable' : 'Shoot'}>
            <span></span>
        </div>
    );
}

export default Shoot;