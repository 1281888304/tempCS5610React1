import SmallerSquare from "./SmallerSquare";
import './Square.css'
import { useState } from "react";
import Board from "./Board";
import { useDispatch } from "react-redux";

//props is argument into a function
export default function (props) {
    const symbol = props.symbol;
    
    //const [state,setState]=useState(props.symbol);
    let borderColor = 'border3';
    if (symbol === '0') {
        borderColor = 'border1';
    } else if (symbol === 'X') {
        borderColor = 'border2';
    }
    const dispatch = useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        }
    )} id="square" class={borderColor}>
        {symbol}
    </div>);
}

//hook function : state
//return (<div onClick={()=> value='0'} id="square">
//not work because it just run function again and the 
//   function run from top to bottom and value reset to X second times
//here return only one  line actually

function Count(props) {
    const [countState, setCountState] = useState(0);
    return (<div onClick={
        () => setCountState(countState + 1)}>
        Click Count: {countState}

    </div>)
}

// if(state==='X'){
//     setState('0');
// }else if(state==='0'){
//     setState('1');
// }else{
//     setState('X');
// }