import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  } 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concepts - 2</h1>

      <Friends></Friends>

      <Users></Users>


      {/* Basic Event for clicking a button */}
      <button onClick={handleClick}>Click Me</button>

      {/* Using a arrow function inside the onClick */}
      <button onClick={() => {alert('New Button Clicked')}}>New Button</button>

      {/* When you are passing a parameter inside a function and if you want to pass it through onClick event, you have to pass through inside a arrow function. other wise every time you save the file it will automatically call the function, then without your button press it will give you the alert. for that we need to pass through inside in a arrow function */}
      <button onClick={() => addToFive(3)}>Another Button</button>



      <Counter>

      </Counter>

      
    </>
  )
}

export default App
