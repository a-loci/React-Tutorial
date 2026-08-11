import { useState } from 'react'
import {useForm} from 'react-hook-form'
import DisplayJobsList from './Components/DisplayJobsList'
import ResetPurpleButton from './Components/ResetPurpleButton'
import VoterForm from './Components/FormPractice'

import './App.css'

// Use npm run dev to start the project
function App() {
  const [count, setCount] = useState(0)

 const hasReachedTen = count >=10;

 const increment = () => {
  if(count< 10){
    setCount((prev) => prev +1);
  }
 }

 
  const resetCount = () => {
    setCount(0);
  }


  return (
    <>
     
        <button
          type="button"
          className="counter"
          onClick={increment}
          disabled={hasReachedTen}
        >
          Count is {count}
        </button>
      
      <DisplayJobsList/>
      <ResetPurpleButton count={count} ResetCurrentCount={resetCount}/>

      <VoterForm/>

   
    </>
  )
}

export default App
