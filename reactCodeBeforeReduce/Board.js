import Square from "./Square";

import "./Board.css"
import { useState } from "react";
import { useSelector } from "react-redux";


//manager the border
export default function Board(){

    const [boardState,setBoard]=
    useState([
        ['','X',''],
        ['','',''],
        ['X','','0'],
    ])

    

    const boardComponent=[];

    for(let i=0;i<boardState.length;i++){
        let row=boardState[i];
        for(let j=0;j<row.length;j++){
            boardComponent.push((
                <Square symbol={boardState[i][j]} onClick={setBoard} boardState=
                {boardState} x={i} y={j}/>
            ))
            
        }
    }
    return (
        <div id="board">
            {/* <Square title="Hello" punc="!" /> */}
            {/* {boardState.map(
                (row)=>{
                    return;
                }

            )}
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square /> */}

            {boardComponent}
            
            
        </div>
        
    )
}