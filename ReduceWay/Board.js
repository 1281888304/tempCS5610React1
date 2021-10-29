import Square from "./Square";

import "./Board.css"
import { useState } from "react";
import { useSelector } from "react-redux";


//manager the border
export default function Board(){
    //state.game data set to boardState
    const boardState=useSelector((state)=> state.game)
    const clickCount=useSelector((state)=> state.clickCount)
    // const [boardState,setBoard]=
    // useState([
    //     ['','X',''],
    //     ['','',''],
    //     ['X','','0'],
    // ])

    //now use reduce do the setboard job

    

    const boardComponent=[];

    for(let i=0;i<boardState.length;i++){
        let row=boardState[i];
        for(let j=0;j<row.length;j++){
            boardComponent.push((
                <Square symbol={boardState[i][j]} x={i} y={j} />
            ))
            
        }
    }
    return (
        <div>
            <h1>{clickCount}</h1>
            <div id="board">
          {boardComponent}
        </div>
        </div>
        
    )
}