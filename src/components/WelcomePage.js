//libraries
import 'animate.css';


const WelcomePage = ({setName}) => {

const submitNameHandler = (e) => {
    e.preventDefault();
    setName(e.target.name.value)
}

  return (
    <>
    <div className="animate__animated animate__fadeInUpBig">
      <div className="userForm ">
        <h1>Bienvenido a RNGame!</h1>
        <p>Del 0 al 100, que tan afortunado te sientes?</p>
        <form onSubmit={submitNameHandler}>
          <span className="spanInput">Ingresa tu nombre aquí!</span>
          <input required type="text" name="name"></input>
          <button type='submit' id="btn21" className="btn-21"><span>Vamos!</span></button>
        </form>
      </div>
      <div className="instructions">
        <h2>RNGame o Random Number Generator game es super facil de jugar!</h2>
        <ul>
          <li>Ingresa con tu nombre</li>
          <li>Ingresa tu numero favorito del 0 al 100</li>
          <li>Dale al boton de jugar</li>
          <li>Diviertete!</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default WelcomePage