import {useState, useRef} from "react"
import Card from "./Card"
//libraries
import 'animate.css';
import WinLoseAnimation from "./WinLoseAnimation";


const Game = ({name}) => {
  const ref = useRef(null);
    const [number, setNumber] = useState()
    const [randomNumber, setRandomNumber] = useState()
    const [flipCard, setFlipCard] = useState(false)
    const [span, setSpan] = useState("")
    const compareNumbers = (selectedNumber, rngNumber)=>{
      if(selectedNumber == rngNumber){
        setSpan("Felicitaciones, descubriste el numero oculto!!")
      }else if(selectedNumber > rngNumber){
        setSpan("Lo siento, el numero oculto es menor a tu numero")
      }else{
        setSpan("Lo siento, el numero oculto es mayor a tu numero")
      }

    }
    const submitNumberHandler = (e) =>{
        e.preventDefault()
        const selectedNumber = e.target.number.value
        const rngNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        setNumber(selectedNumber)
        setRandomNumber(rngNumber)
        setFlipCard(true)

compareNumbers(selectedNumber, rngNumber)

    }
const reset = ()=>{
    setNumber()
    setRandomNumber()
    setFlipCard(false)
    ref.current.value = '';
    setSpan("")
}
  return (
    <>
    <div className="animate__animated animate__fadeIn tryIt">
      <div className="gameForm">
        <h1>RNGame</h1>
        <p>Hola {name}! Listo para descubrir el numero oculto?</p>
        <form onSubmit={submitNumberHandler}>
            <span className="spanInput">Intresa aqui tu numero!</span>
            {flipCard ?  <input disabled required ref={ref} type="number" name="number" min="0" max="100" length="500"></input>: <input required ref={ref} type="number" name="number" min="0" max="100" length="500"></input> }
            {flipCard ? <button disabled id="btn22" className="btn-22"><span>Jugar!</span></button>:<button type="submit" id="btn22" className="btn-22"><span>Jugar!</span></button> }
        </form>
    </div>
    <span className="message">{span}</span>
      <Card randomNumber={randomNumber} flipCard={flipCard}/>
      {number && <WinLoseAnimation span={span} reset={reset}/>}
    </div>
    </>
  )
}

export default Game
