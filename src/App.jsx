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
            <img src=  "https://solid-wandflower-98c.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5cb0b97a-e042-4f52-a797-70a5c17f52e1%2Fsampling.png?table=block&id=bd7178ee-261a-4e62-aead-ad903584e362&spaceId=258031e1-f7f6-4e76-94e6-2cd63ab6378f&width=250&userId=&cache=v2" alt="" /> 
        </button> 
    </div>
  )
}

export default App

