import React from 'react'

const WinLoseAnimation = ({reset, span}) => {
const booleanIcon = span.includes("siento")

  return (
    <div className='container'>
        <div className={booleanIcon ? "subContainer" : "subContainer startConfetti"}>
          <span className="background"></span>
          {booleanIcon ? <span className="icon">😭</span>:<span className="icon">🏆</span>}
          <span className="square"></span>
          <span className="circle"></span>
          <span className="triangle"></span>
          <button onClick={reset} className="button">De Nuevo!</button>
        </div>
      </div>
  )
}

export default WinLoseAnimation
