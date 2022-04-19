import React, {useState} from 'react'
import PrincipalStageStyles from '../styles/PrincipalStage.css'
import NicoPixels from '../assets/images/Nico.png'
const PrincipalStage = () => {
    const [msg, setMsg] = useState(0)

    return (
        <div className='PrincipalStage'>
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