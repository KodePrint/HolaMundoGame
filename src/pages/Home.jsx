import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import LogoHolaMundo from '../assets/images/HolaMundo.png'
import LogoKP from '../assets/images/KodePrint_White.png'
import HomeStyles from '../styles/Home.css'
import Loading from '../containers/Loading'

const Home = () => {
    const navigate = useNavigate()
    const [play, setPlay] = useState(false);

    function loadStage() {
        setTimeout(() => {
            navigate('/principal-stage')
        }, 2000);
    }
    const handlePlay = ()=> {
        setPlay(!play); 
        loadStage();
    }

    return (
        <div className='Home'>
            { play && <Loading/> }
            <div className="title">
                <h2>
                    Hola Mundo
                    <figure>
                        <img src={LogoHolaMundo} alt="" />
                    </figure>
                </h2>
                <h1 data-text='The Game..!'>The Game..!</h1>
            </div>
            <button className='play' onClick={handlePlay}>PLAY</button>
            <footer className='footer'>
                Created by Kevin Palma 2022
                <figure>
                    <img src={LogoKP} alt="" />
                </figure>
            </footer>
        </div>
    );
}

export default Home;