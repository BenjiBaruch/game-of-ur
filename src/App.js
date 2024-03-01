import './App.css';
import { useState } from "react";
import HomeRow from './HomeRow';
import RaceRow from './RaceRow';
import DiceRow from './DiceRow';



function App() {
  const [activePlayer, setActivePlayer] = useState(0);
  const [diceValues, setDiceValues] = useState([Array(4).fill(0)]);
  const [diceScore, setDiceScore] = useState(0);
  const [redBoard, setRedBoard] = useState([Array(15).fill(false)]);
  const [blueBoard, setBlueBoard] = useState([Array(15).fill(false)]);
  const [redHomeWell, setRedHomeWell] = useState(7);
  const [redEndWell, setRedEndWell] = useState(0);
  const [blueHomeWell, setBlueHomeWell] = useState(7);
  const [blueEndWell, setBlueEndWell] = useState(0);
  const [winner, setWinner] = useState(-1);
  const [highlight, setHighlight] = useState(-1);

  function rollDice() {
    const vals = [Array(4)];
    vals[0] = Math.floor(Math.random() * 2);
    vals[1] = Math.floor(Math.random() * 2);
    vals[2] = Math.floor(Math.random() * 2);
    vals[3] = Math.floor(Math.random() * 2);
    
    setDiceScore(vals[0] + vals[1] + vals[2] + vals[3]);
    setDiceValues(vals);
  }

  function doTurn(square, row) {
    console.log("doTurn(" + square + ')');
    console.log("dice score type: " + typeof diceScore);

    if (square === -1) {
      console.log("invalid square");
      return;
    }

    if (diceScore === 0) {
      console.log("zero dice");
      setActivePlayer((activePlayer + 1) % 2);
      rollDice();
      return;
    }

    const [activeHomeWell, setActiveHomeWell, activeEndWell, setActiveEndWell] = (activePlayer === 0) 
      ? [redHomeWell, setRedHomeWell, redEndWell, setRedEndWell]
      : [blueHomeWell, setBlueHomeWell, blueEndWell, setBlueEndWell];


    if ((row === "_red" && activePlayer === 1) || (row === "_blue" && activePlayer === 0)) {
      console.log("wrong side");
      return;
    }
    
    const dest = square + diceScore;
    if (dest > 15) {
      console.log("dest too far");
      return;
    }
    const finish = dest === 15;
    const rosette = dest === 4 || dest === 8 || dest === 14;
    const raceRow = 4 < dest && dest < 13;

    const [activeBoard, setActiveBoard] = (activePlayer === 0) ? [redBoard.slice(), setRedBoard] : [blueBoard.slice(), setBlueBoard];
    const [opponentBoard, setOpponentBoard] = (activePlayer === 1) ? [redBoard.slice(), setRedBoard] : [blueBoard.slice(), setBlueBoard];
  
    console.log("turn: " + (activePlayer === 0 ? "red" : "blue") + 
              "\nRed home well: " + redHomeWell + 
              "\nBlue home well: " + blueHomeWell + 
              "\nSquare: " + square +
              "\nDest: " + dest);


    if (square > 0 && !activeBoard[square]) {
      console.log("no piece at clicked tile");
      return;
    }


    if (!finish && (activeBoard[dest] || (opponentBoard[dest] && (dest === 8)))) {
      console.log("dest space occupied");
      return;
    }

    if (square === 0) {
      if (activeHomeWell === 0) {
        console.log("home well empty");
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
    rollDice();
  }

  function mouseHighlight(tile) {
    setHighlight(tile);
  }

  return (
    <div className="App">
      <DiceRow occupancy={diceValues} activePlayer={activePlayer} />
      <HomeRow 
        occupancy={redBoard} 
        color="_red" 
        onClick={doTurn} 
        onHover={mouseHighlight} 
        bottom={false} 
        highlight={highlight} 
        homeWell={redHomeWell}
        endWell={redEndWell}
      />
      <RaceRow 
        red={redBoard} 
        blue={blueBoard} 
        onClick={doTurn} 
        onHover={mouseHighlight} 
        highlight={highlight} 
      />
      <HomeRow 
        occupancy={blueBoard} 
        color="_blue" 
        onClick={doTurn} 
        onHover={mouseHighlight} 
        bottom={true} 
        highlight={highlight}
        homeWell={blueHomeWell}
        endWell={blueEndWell} 
      />
    </div>
  );
}

export default App;
