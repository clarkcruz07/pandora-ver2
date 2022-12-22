import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import tapAnimation from '../../assets/json/tapanimation.json'
import scanAnimation from '../../assets/json/scananimation.json'
import {Link} from 'react-router-dom'
export const Body = () =>{

    return (
        <div className="row">
            <div className="position-relative border-default rounded-big w-75 mx-auto mt-5 idle">
                <Player 
                src={tapAnimation}
                loop
                autoplay />
                <p className="text-white display-5 pb-4">Tap to interact</p>
            </div>

            <div className="position-relative border-default rounded-big w-75 mx-auto mt-5 scan-animation">
                <Player 
                src={scanAnimation}
                loop
                autoplay />
                <p className="text-white display-5 pb-4">Scan generated QR code from your QUBE app</p>
            </div>
        </div>
    )
}

export default Body