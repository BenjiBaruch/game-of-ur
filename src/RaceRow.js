import Tile from './Tile';
import './Row.css';


function HomeRow({occupancy, onClick, onHover, highlight}) {
    return <div className="raceRow">
        <Tile tileName="multi_hatch" occupancy="" onClick={() => onClick(5)} onMouseOver={() => onHover(5)} hovered={highlight === 5} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(6)} onMouseOver={() => onHover(6)} hovered={highlight === 6} />
        <Tile tileName="multi_hatch" occupancy="" onClick={() => onClick(7)} onMouseOver={() => onHover(7)} hovered={highlight === 7} />
        <Tile tileName="rosette" occupancy="" onClick={() => onClick(8)} onMouseOver={() => onHover(8)} hovered={highlight === 8} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(9)} onMouseOver={() => onHover(9)} hovered={highlight === 9} />
        <Tile tileName="multi_hatch" occupancy="" onClick={() => onClick(10)} onMouseOver={() => onHover(10)} hovered={highlight === 10} />
        <Tile tileName="four_eyes" occupancy="" onClick={() => onClick(11)} onMouseOver={() => onHover(11)} hovered={highlight === 11} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(12)} onMouseOver={() => onHover(12)} hovered={highlight === 12} />

    </div>
}

export default HomeRow;