import card from "./card.module.css";
import RandomColor from './CardItem'
import {useState} from 'react'

let displayedColors1 = [];
let score = 0;

function Card(){

    const [change , setChange] = useState(false);
    const [reset , setReset] = useState(false);
    let displayedColors = displayedColors1

    function randomColor(){
        const random = Math.floor(Math.random() * 4) + 1;
        if(random === 1){
            return "red";
        }
        if(random === 2){
            return "blue";
        }
        if(random === 3){
            return "green";
        }
        if(random === 4){
            return "purple"
        }
        if(random === 5){
            return "orange";
        }
    }
    const color = randomColor()
    
    function btnHandler(){
        if(change){
            setChange(false);
        }else{
            setChange(true);
        }

        displayedColors.push(color);
        console.log(displayedColors);
        score +=1;
      
        if(score === 15){
            score = 0;
            alert("Congratulations")
        }
    }
        
    function yesHandler(color){
        let colorsInCommon = 0
        displayedColors.forEach((value)=>{
            if(value === color){
                colorsInCommon += 1;
            }
        });
        displayedColors1.forEach((value)=>{
            if(colorsInCommon === 0 && value !== color){
                displayedColors1 = [];
                score = -1;
                alert("You failed, better luck next time")
            }
        })
    }
    function noHandler(color){
        displayedColors.forEach((value)=>{
            if(value === color){
                displayedColors1 = [];
                alert("You failed, better luck next time")
                score = -1;
               
            }
        });
        
    }

    
   
    return(
        <div className={card.section}>
            <h1>Score: {score}</h1>
            <div className={card.card}>
               {change && <RandomColor color={color} />}
               {!change && <RandomColor color={color}  />}
            </div>
            <div className={card.btns}>
            <br /> <h1 className={card.heading}>Have you seen this color?</h1>
                <button onClick={()=> {setChange(true); yesHandler(color); console.log(color + " current");btnHandler();}}>Yes</button>
                <button onClick={()=> {setChange(true); noHandler(color); console.log(color + " current"); btnHandler();}}>No</button>
                
            </div>
        </div>
    )
}
export default Card;