import { useState, useCallback } from "react"
import Card from "../Card/Card"
import './Grid.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import isWinner from '../helpers/checkWinner'

function Grid({numberOfCards}) {


    const [ turn , setTurn ] = useState(true) // x -> false and 0 -> true
  const [board, setBoard] = useState(Array(numberOfCards).fill(""))
  const [ winner , setWinner ] = useState(null)
  

   const play = useCallback (function playCallback(index) {
        console.log('move played', index)

     if(turn === true) {
        board[index] = "0"
     } else {
        board[index] = "X"
     }

const win = isWinner(board, turn ? '0' : 'X')
console.log("winner is ", win)

if(win) {
    setWinner(win)
    toast.success(`Wow! ${win} won the game!!`,{
        theme: "dark"
      });

    
} 
  setBoard([...board])
        setTurn(!turn);
    }
   ,[turn])



    function reset() {
        setBoard(Array(numberOfCards).fill(""))
        setTurn(true)
        setWinner(null)
    }

    return (
        <div className="grid-wrapper">


{winner && (
                <>
                    <h1 className="turn-highlight"> Winner is {winner} </h1>
                    <button className="reset" onClick={reset}>Reset game</button>
                    <ToastContainer position="top-center" />
                </>
            )}
            <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'} </h1>

          
 


   
      
        <div className="grid">
        
        {board.map((value, idx) => {
         return   <Card gameEnd={winner ? true : false} key={idx} onPlay={play}  player= {value}  index={idx}/>
          })}


        
        </div>
        </div>
    )
}

export default Grid