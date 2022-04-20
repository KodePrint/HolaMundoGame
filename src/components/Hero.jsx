import React, {useState, useEffect} from 'react'
import HeroAvatar from '../assets/images/HolaMundo.png'
import HeroStyle from '../styles/Hero.css'
import Shoot from './Shoot'

const Hero = ({shoots}) => {
    console.log(shoots)
    return (
        <figure className="Hero">
            <img src={HeroAvatar} alt="Hero Logo" />
            {shoots && <Shoot/>}
        </figure>
    );
}

export default Hero;