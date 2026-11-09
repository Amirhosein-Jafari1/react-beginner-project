import { useState } from "react";
import ChildComponent from "./ChildComponent";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("App component rendered");
  
  return (
    <div className="grid place-items-center gap-4 p-4">
      <ChildComponent/>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};




export default App
