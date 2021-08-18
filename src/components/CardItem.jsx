import {useState} from 'react'
import Card from './card';
import cards from './card.module.css'

function RandomColor(props){
    const [sameGame, newGame]= useState(false)

    
    return(
        <div className={cards.colorview} style={{backgroundColor: props.color}}>
            
        </div>
    )
}
export default RandomColor;