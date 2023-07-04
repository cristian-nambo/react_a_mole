// Mole
// This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. 
// This component will render when displayMole === true

// A useEffect hook that will start the timer and clean it up afterward
import { useEffect } from "react"
import moleIMG from '../mole.png' 

function Mole(props) {

    useEffect(() =>{
        let randSeconds  = Math.ceil(Math.random() *5000)
        let timer = setTimeout(() =>{
            props.toggle(false)
        }, randSeconds)
        return () =>  clearTimeout(timer)
    })

    return(
        <div>
            <img style={{'width': '10vw'}} src={moleIMG} onClick={props.handleClick} />
        </div>
    )
}

export default Mole