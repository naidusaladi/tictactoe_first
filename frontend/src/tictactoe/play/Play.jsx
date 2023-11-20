import React,{useContext,useState,useEffect} from 'react'
import {store} from '../../App'
import './Play.css'


// let board=["","","","","","","","",""]

let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const Play = () => {
    const [board,setBoard]=useState(Array(9).fill(""))
    const [chance,setChance]=useState("O")
    const [data,setData]=useContext(store)
    const [player,setPlayer]=useState("O")
    const [robot,setRobot]=useState("X")
    
    useEffect(()=>{
        if(data===1){

            setChance("X")
            setPlayer("X")
            setRobot("O")
            
        }else{
            setChance("O")
            setPlayer("O")
            setRobot("X")

        }
    },[])

    const isWin=()=>{
        win.forEach(item=>{
            if(board[item[0]]!=="" && board[item[0]]===board[item[1]] && board[item[1]]===board[item[2]] && board[item[2]]===board[item[0]])
            {
                alert(board[item[0]]+"Won")
            }
        })

    }
    const isTie=()=>{
        let count=0
        for (const item of board){
            if(item===""){
                count+=1
                break
            }

        }
        if(count===0){
            alert("Tie")
        }
       

    }

    const getRandomInt=(min,max)=>{
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    const computerMove=async()=>{
        if(chance!==player){
            let move=0
            while(board[move]!==""){
                move=getRandomInt(0,8)
            }
            const copyBoard2=[...board]
            copyBoard2[move]=chance
            console.log(copyBoard2)
            await setBoard(copyBoard2)
            console.log(board)
            setChance(chance==="X"?"O":"X")
            isWin()
            isTie()

          }

    }



    const HandleClick=async(e,n)=>{
          isWin()
          isTie()
          if(board[n]===''){
            // board[n]=chance
            // e.target.innerText=chance
            const copyBoard=[...board]
            copyBoard[n]=chance
            console.log(copyBoard)
            await setBoard(copyBoard)
            console.log(board)
            setChance(chance==="X"?"O":"X")
          }
          isWin()
          isTie()
          computerMove()


          console.log(board)
    }
  return (
    <>
     <div className='playContainer'>
        <div className='playHeader'>
            <div className='logo'>X O </div>
            <div className='turn'>{chance} TURN</div>
            <div>
                ( )
            </div>
        </div>
        <div className='playBoxes'>
            <div className='playBox' onClick={(e)=>{HandleClick(e,0)}}>{board[0]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,1)}}>{board[1]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,2)}}>{board[2]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,3)}}>{board[3]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,4)}}>{board[4]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,5)}}>{board[5]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,6)}}>{board[6]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,7)}}>{board[7]}</div>
            <div className='playBox' onClick={(e)=>{HandleClick(e,8)}}>{board[8]}</div>
            
        </div>
        <div className='scoresBoxes'>
            <div className='scoreBox b1'>
                <div>X (You)</div>
                <div>0</div>
            </div>
            <div className='scoreBox b2'>
                <div>TIES</div>
                <div>0</div>
            </div>
            <div className='scoreBox b3'>
                <div>O (CPU)</div>
                <div>0</div>
            </div>
        </div>
     </div>
      
    </>
  )
}

export default Play
