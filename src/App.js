import './App.css';
import { useState } from "react";
import HomeRow from './HomeRow';
import RaceRow from './RaceRow';
import DiceRow from './DiceRow';



function App() {
  const piecesPerSide = 7
  const [activePlayer, setActivePlayer] = useState(0);
  const [diceValues, setDiceValues] = useState([Array(4).fill(0)]);
  const [diceScore, setDiceScore] = useState(0);
  const [redBoard, setRedBoard] = useState([Array(15).fill(false)]);
  const [blueBoard, setBlueBoard] = useState([Array(15).fill(false)]);
  const [redHomeWell, setRedHomeWell] = useState(piecesPerSide);
  const [redEndWell, setRedEndWell] = useState(0);
  const [blueHomeWell, setBlueHomeWell] = useState(piecesPerSide);
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

  function checkWinner() {
    if (redEndWell === piecesPerSide) {
      setWinner(0);
      setHighlight(-1);
    }
    else if (blueEndWell === piecesPerSide) {
      setWinner(1);
      setHighlight(-1);
    }
  }

  function doTurn(square, row) {
    console.log("doTurn(" + square + ')');
    console.log("dice score type: " + typeof diceScore);

    if (diceScore === 0) {
      console.log("zero dice");
      setActivePlayer((activePlayer + 1) % 2);
      rollDice();
      return;
    }

    const [activeHomeWell, setActiveHomeWell, activeEndWell, setActiveEndWell, opponentHomeWell, setOpponentHomeWell] = (activePlayer === 0) 
      ? [redHomeWell, setRedHomeWell, redEndWell, setRedEndWell, blueHomeWell, setBlueHomeWell]
      : [blueHomeWell, setBlueHomeWell, blueEndWell, setBlueEndWell, redHomeWell, setRedHomeWell];

    const dest = square + diceScore;

    const finish = dest === 15;
    const rosette = dest === 4 || dest === 8 || dest === 14;
    const raceRow = 4 < dest && dest < 13;

    const [activeBoard, setActiveBoard] = (activePlayer === 0) ? [redBoard.slice(), setRedBoard] : [blueBoard.slice(), setBlueBoard];
    const [opponentBoard, setOpponentBoard] = (activePlayer === 1) ? [redBoard.slice(), setRedBoard] : [blueBoard.slice(), setBlueBoard];

    let movePossible = false;
    for (let i = 0; i < 15; i++) {
      if (activeBoard[i] || (i == 0 && activeHomeWell > 0)) {
        let localDest = i + diceScore;
        if (!((activeBoard[localDest] && localDest < 15) || (localDest == 8 && opponentBoard[8]) || localDest > 15)) {
          movePossible = true;
          break;
        }
      }
    }
    if (!movePossible) {
      console.log("no possible move");
      setActivePlayer((activePlayer + 1) % 2);
      rollDice();
      return;
    }

    if ((row === "_red" && activePlayer === 1) || (row === "_blue" && activePlayer === 0)) {
      console.log("wrong side");
      return;
    }
    
    if (dest > 15) {
      console.log("dest too far");
      return;
    }

    if (square === -1) {
      console.log("invalid square");
      return;
    }

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
    if (raceRow && opponentBoard[dest]) {
      setOpponentHomeWell(opponentHomeWell+1);
      opponentBoard[dest] = false;
    }

    setActiveBoard(activeBoard);
    setOpponentBoard(opponentBoard);

    if (!rosette) {
      setActivePlayer((activePlayer + 1) % 2);
    }
    rollDice();

    checkWinner();
  }

  function doNothing(hehe, lol) {
    return;
  }
  function DONThighlight(comedy) {
    return;
  }

  function mouseHighlight(tile) {
    setHighlight(tile);
  }

  if (winner === -1) {
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
  else {
    return (
      <div className="App">
        <h1 className="winner">
          {winner === 0 ? "RED WINS!!!!" : "BLUE WINS!!!" /*blue does not deserve as many exclamation points*/} 
        </h1>
        <HomeRow 
          occupancy={redBoard} 
          color="_red" 
          onClick={doNothing} 
          onHover={DONThighlight} 
          bottom={false} 
          highlight={highlight} 
          homeWell={redHomeWell}
          endWell={redEndWell}
        />
        <RaceRow 
          red={redBoard} 
          blue={blueBoard} 
          onClick={doNothing} 
          onHover={DONThighlight} 
          highlight={highlight} 
        />
        <HomeRow 
          occupancy={blueBoard} 
          color="_blue" 
          onClick={doNothing} 
          onHover={DONThighlight} 
          bottom={true} 
          highlight={highlight}
          homeWell={blueHomeWell}
          endWell={blueEndWell} 
        />
      </div>
    );
  }
}

export default App;
