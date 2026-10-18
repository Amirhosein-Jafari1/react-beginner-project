import { useEffect, useInsertionEffect, useLayoutEffect, useState } from "react"

const App = () => {
  const [color, setColor] = useState("white");

  // ✅ test useEffect
  useEffect(() => {
    console.log("useEffect اجرا شد!")
    setColor('lightgreen');
  }, []);

  // ✅ test useLayoutEffect
  useLayoutEffect(() => {
    console.log("useLayoutEffect اجرا شد!");
    setColor('lightblue');
  }, []);

  // ✅ test useInsertionEffect
  useInsertionEffect(() => {
    console.log("useInsertionEffect اجرا شد!");
    setColor('orange')
  }, []);


  return (
    <div 
      style={{
        width: '200px',
        height: '100px',
        margin: '30px auto',
        background: color,
        textAlign: 'center',
        paddingTop: '30px',
      }}
      >
        Box Color: {color}
      </div>
  )
}



export default App
