import { useState } from "react"

export default function Ludo() {
    let [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0})
    let updateBlue = ()=>{
        setMoves({...moves,blue:moves.blue +1}) 
    }
    let updateYellow = ()=>{
        setMoves({...moves,yellow:moves.yellow +1}) 
    }
    let updateRed = ()=>{
        setMoves({...moves,red:moves.red +1}) 
    }
    let updateGreen = ()=>{
        setMoves({...moves,green:moves.green +1}) 
    }
    return (
        <>
            <div className="Blue">
                <h2>Blue moves : {moves.blue}</h2>
                <button style={{backgroundColor:'blue'}} onClick={updateBlue}>+1</button>
                <h2>Yellow moves: {moves.yellow}</h2>
                <button  style={{backgroundColor:'yellow', color:'black'}} onClick={updateYellow}>+1</button>
                <h2>Red moves: {moves.red}</h2>
                <button  style={{backgroundColor:'red'}} onClick={updateRed}>+1</button>
                <h2>Green moves: {moves.green}</h2>
                <button  style={{backgroundColor:'green'}}onClick ={updateGreen}>+1</button>
            </div>
        </>


    )
}