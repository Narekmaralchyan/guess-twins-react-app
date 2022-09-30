import GuesTwinApp from './Components/GuesTwinApp';
import GameManage from './Components/GameManage';
import WinGame from './Components/Win';
import { useState } from 'react';

function App() {
  const [started,setStart] = useState(false)
  const [win,setWin] = useState(false)
  
  function startGame(){
    setStart(true)
    setWin(false)
  }
  function restartGame(){
    setStart(false)
    setTimeout(()=>{
      startGame(true)
    })
  }
  function winGame (){
    setWin(true)
  }
  
  return (
    <div className="App">
      <GameManage 
          started={started} 
          startGame={startGame}
          restartGame={restartGame}
      />
      
      {started?win?<WinGame start={startGame}/>:<GuesTwinApp winGame={winGame}/>:""}
    </div>
  );
}

export default App;
