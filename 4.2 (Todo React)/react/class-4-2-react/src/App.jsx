import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick= () =>{

    setCount(count+1);
  }

  return (
    <div>
      

      
        <button onClick={() => handleButtonClick()}>
          count is  asdas {count}
        </button>      
    </div>
  )
}

export default App
