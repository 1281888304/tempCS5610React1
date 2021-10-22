import SmallerSquare from "./SmallerSquare";
import './Square.css'
import { useState } from "react";

//props is argument into a function
export default function (props) {

    // let punc=props.punc;
    // if(!punc){
    //     punc=":(";
    // }

    // let value='X';


    //     return (<div onClick={()=> value='0'} id="square">
    //             {/* {props.title} */}
    //         {value}
    //         </div>);
    // }
    /*
            hooks way
    */
   const [state,setState] =useState('1');
   //const stateArray=useState('X');
   //const state=stateArray[0];
   let borderColor='border0';
   if(state==='0'){
       borderColor='border1';
   }else if (state==='X'){
       borderColor='border2';
   }
    

    return (<div onClick={() => {
        if(state==='X'){
            setState('0');
        }else if(state==='0'){
            setState('1');
        }else{
            setState('X');
        }
        
    }} id="square" class={borderColor}>

        {state}
        <Count />
    </div>);
}

//hook function : state
//return (<div onClick={()=> value='0'} id="square">
//not work because it just run function again and the 
//   function run from top to bottom and value reset to X second times
//here return only one  line actually

function Count(props){
    const [countState,setCountState]=useState(0);
    return (<div onClick={
        ()=>setCountState(countState+1)}>
            Click Count: {countState}

    </div>)
}