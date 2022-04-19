import {useState} from 'react'


const useWriteEfects = (msg='') => {
    const [text, setText] = useState('')
    
    let arrayLetters = msg.split('');
    let cont = 0
    let write = setInterval(() => {
        let letter
        console.log(letter+arrayLetters[cont])
        // setText(text+arrayLetters[cont]) 
        cont++;
        if (cont === arrayLetters.length) {
            clearInterval(write)
        }
    }, 200);
    // return text
}

export default useWriteEfects