import Die from './Die';

function DiceRow({occupancy}) {
    return <div className="diceRow"> 
        <Die occupancy={occupancy[0]} />
        <Die occupancy={occupancy[1]} />
        <Die occupancy={occupancy[2]} />
        <Die occupancy={occupancy[3]} />
    </div>
}

export default DiceRow;