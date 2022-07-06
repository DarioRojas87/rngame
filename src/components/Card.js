import React from 'react'

const Card = ({flipCard, randomNumber}) => {
  return (
    <div className="flip">
      <div className={flipCard ? "card flipped" : "card"}>
          <div className="face front">?</div>
          <div className="face back">{randomNumber}</div>
      </div>
    </div>
  )
}

export default Card