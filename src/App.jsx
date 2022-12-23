import './App.css'
import UserCard from './components/UserCard'
import Data from './data/Data'
import { useState } from 'react'

function App() {
const [ index, setIndex] = useState(0)

const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]

const changeColor =  Math.floor(Math.random() * colors.length);

document.body.style = `background-color : ${colors[changeColor]} `


const changeIndex = () => {
  const newRandom = Math.floor(Math.random() * Data.length);
  setIndex(newRandom);
};
  return (
    <div className="App">
        { 
          <UserCard users ={Data[index]} color = {colors[changeColor]} />
        }
        <button  onClick= { changeIndex } alt=""> 
            <img src=  "./src/assets/sampling.png" alt="" /> 
        </button> 
    </div>
  )
}

export default App

