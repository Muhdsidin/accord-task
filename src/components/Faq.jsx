import React, { useState } from 'react'

function Faq({question, answer}) {
  const [text, setText] = useState(false)
  const display =()=>{
    setText(!text)
  }
  return (
    <>
    <div className="question">
            <h2>{question}</h2>
            <p onClick={display}>{text? "-": "+"}</p>
         </div>
         <div className="answers">
            {text && <p>{answer}</p> }
         </div>
    </>
  )
}

export default Faq