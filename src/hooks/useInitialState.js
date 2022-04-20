import { useState } from "react";

const initalState = {
    shoots: []
};

const useInitialState = () => {
    const [state, setState] = useState(initalState)

    const sentShoot = (payload) => {
        setState({
            ...state,
            shoots: [
                ...state.shoots,
                payload
            ],
        });
    };

    const destroyShot = (payload) => {
        console.log('destroy')
    }

    return {
        state,
        sentShoot,
        destroyShot
    }
}

export default useInitialState;