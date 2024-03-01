import Die from './Die';
import './Row.css';
import ColorNode from "./ColorNode";

function DiceRow({occupancy, activePlayer}) {
    return <div className="diceRow"> 
        <Die occupancy={occupancy[0]} />
        <Die occupancy={occupancy[1]} />
        <Die occupancy={occupancy[2]} />
        <Die occupancy={occupancy[3]} />
        <ColorNode activePlayer={activePlayer} />
    </div>
}

export default DiceRow;