
import { useState } from "react"
import "./app.css"
import Data from './Data'
import Faq from "./components/Faq.jsx"

function App() {
   const [data, setData] = useState(Data)
  return (
    <div className="container">
      <div className="accordionBlock">
         {Data.map((val)=>{
            return(
               <>
               <Faq {...val}/>
               </>
            )
         })}
         
      </div>
    </div>
  )
}

export default App