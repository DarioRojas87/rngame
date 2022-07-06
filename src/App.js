import {useState} from "react"
//Styles
import './App.css';
//Components
import WelcomePage from './components/WelcomePage';
import Game from './components/Game';
//Libraries
import 'animate.css';

function App() {
  const [name, setName] = useState("")
  return (
<div className="mainContainer">
  <img className="animate__animated animate__fadeInDownBig" src="https://images.assetsdelivery.com/compings_v2/mamun25g/mamun25g2111/mamun25g211111464.jpg" alt="RNG logo"/> 
  {!name && <WelcomePage setName={setName}/>}
  {name && <Game name={name}/>}
</div>
  );
}

export default App;
