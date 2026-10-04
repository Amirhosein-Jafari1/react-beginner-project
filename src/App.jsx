import { useState } from "react";
import ChildComponent from "./ChildComponent";

const App = ()=> {
    const [text, setText] = useState("hello world");
    const changeText = ()=> {
        setText("سلام دنیا");
    }
       
    return (
        <div>
            <button onClick={changeText}>Click me</button>
            <ChildComponent text={text} >
                welcome to this page
            </ChildComponent>
        </div>
    )
}

export default App