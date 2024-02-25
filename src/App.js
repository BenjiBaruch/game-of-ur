import './App.css';
import { useState } from "react";
import Tile from './Tile';


function App() {
  const [activePlayer, setActivePlayer] = useState(0);
  const [diceValues, setDiceValues] = useState([Array(4)]);
  const [redBoard, setRedBoard] = useState([Array(15).fill(false)]);
  const [blueBoard, setBlueBoard] = useState([Array(15).fill(false)]);
  const [redHomeWell, setRedHomeWell] = useState(7);
  const [redEndWell, setRedEndWell] = useState(0);
  const [blueHomeWell, setBlueHomeWell] = useState(7);
  const [blueEndWell, setBlueEndWell] = useState(0);
  const [winner, setWinner] = useState(-1);
  let diceScore = 0;

  function RollDice() {
    setDiceValues(diceValues.map(() => {
      return Math.floor(Math.random() * 2);
    }))
    diceScore = 0;
    diceValues.array.forEach((value) => {
      diceScore += value;
    });
  }

  function DoTurn(square) {
    const [activeHomeWell, setActiveHomeWell, activeEndWell, setActiveEndWell] = (activePlayer === 0) 
      ? [redHomeWell, setRedHomeWell, redEndWell, setRedEndWell]
      : [blueHomeWell, setBlueHomeWell, blueEndWell, setBlueEndWell];

    
    const dest = square + diceScore;
    if (dest > 15) {
      return;
    }
    const finish = dest === 15;
    const rosette = dest === 4 || dest === 8 || dest === 14;
    const raceRow = 4 < dest && dest < 13;

    const [activeBoard, setActiveBoard] = (activePlayer === 0) ? [redBoard.slice(), setRedBoard] : [blueBoard.slice(), setBlueBoard];
    const [opponentBoard, setOpponentBoard] = (activePlayer === 1) ? [redBoard.slice(), setRedBoard] : [blueBoard.slice(), setBlueBoard];
  
    if (!finish && (activeBoard[dest] || (opponentBoard[dest] && (dest === 8)))) {
      return;
    }

    if (square === 0) {
      if (activeHomeWell === 0) {
        return;
      }
      else {
        if (activeHomeWell === 1) {
          activeBoard[0] = false;
        }
        setActiveHomeWell(activeHomeWell-1);
      }
    }
    else {
      activeBoard[square] = false;
      if (finish) {
        setActiveEndWell(activeEndWell+1);
        if (activeEndWell === 7) {
          setWinner(activePlayer);
        }
      }
    }

    activeBoard[dest] = true;
    if (raceRow) {
      opponentBoard[dest] = false;
    }

    setActiveBoard(activeBoard);
    setOpponentBoard(opponentBoard);

    if (!rosette) {
      setActivePlayer((activePlayer + 1) % 2);
    }
    RollDice();
  }

  function onTileClick() {
    return;
  }

  return (
    <div className="App">
      <h1>HELLO THERE</h1>
      <Tile tileName="rossette" occupancy="" onClick={onTileClick} />
      <Tile tileName="multi_hatch" occupancy="_red" onClick={onTileClick} />
      <img src={require('./assets/five-eyes.svg')} alt="five_eyes" />
    </div>
  );
}

export default App;
