import React,{createContext,useState} from 'react'

// import Chatbot from './chatbot/Chatbot'
import Landing from './tictactoe/landing/Landing'
import './App.css'
import Play from './tictactoe/play/Play'


export const store=createContext()

const App = () => {
  const [data,setData]=useState(0)
    return (
      <store.Provider value={[data,setData]}>
      <div className='body'>

        <Landing/>
        <Play/>
      </div>
    </store.Provider>
  )
}

export default App
