import  { useState } from 'react';

function Counter() {
  // 1. We declare our state variable 'count' and its setter 'setCount'.
  // 2. We pass in 0 as the initialState.
  const [count, setCount] = useState(0); 

  // This function runs every time the button is clicked
  const handleCLick = () => {
    // We use the setter function to update the state to the new value
    setCount(count + 1); 
  };

  return (
    <div>
      <h2>You clicked {count} times!</h2>
      <button onClick={handleCLick}>
        Click me
      </button>
    </div>
  );
}

export default Counter;