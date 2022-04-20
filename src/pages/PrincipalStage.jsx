import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PrincipalStageStyles from '../styles/PrincipalStage.css'
import NicoPixels from '../assets/images/Nico.png'
import Loading from '../containers/Loading'


const PrincipalStage = () => {

    const navigate = useNavigate()
    const [msg, setMsg] = useState(0)
    const [loading, setLoading] = useState(false);


    const handleClick = () => {
        setMsg(msg + 1)
        console.log(msg)
        if (msg === 3) {
            setLoading(!loading)
            loadStage()
        }
    }

    function loadStage() {
        setTimeout(() => {
            navigate('/level-one')
        }, 2000);
    }

    return (
        <div className='PrincipalStage' onClick={handleClick}>
            { loading && <Loading/>}
            <figure className='image-container'>
                <img src={NicoPixels} alt="Nicolas Schurmann" />
            </figure>
            <div className="msg-box">
                {
                    msg === 0 ? (<p>Hola Mundo..! Se que esto parece un juego pero no lo es, todo este tiempo te he enconemndado una sola mision..!</p>) 
                    : msg === 1 ? (<p>Es momento de que cunplamos la mision que tanto se te ha enconmendado, ¿Sabes cual es?</p>)
                    : (<h3>¡Golpea al <b>Maldito Boton de me Gusta</b>!</h3>)
                }
                {/* <p>Hola Mundo..! Se que esto parece un juego pero no lo es, todo este tiempo te he enconemndado una sola mision..!</p>
                <p>Es momento de que cunplamos la mision que tanto se te ha enconmendado, ¿Sabes cual es?</p>
                <h3>¡Golpea al <b>Maldito Boton de me Gusta</b>!</h3> */}
            </div>
        </div>
    );
}

export default PrincipalStage;