import Tile from './Tile';
import './Row.css';


function HomeRow({red, blue, onClick, onHover, highlight}) {
    return <div className="raceRow">
        <Tile 
            tileName="multi_hatch" 
            occupancy={red[5] ? "_red" : (blue[5] ? "_blue" : "")}
            onClick={() => onClick(5, "race")} 
            onMouseOver={() => onHover(5)} 
            hovered={highlight === 5}
            className="tile"
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={red[6] ? "_red" : (blue[6] ? "_blue" : "")}
            onClick={() => onClick(6, "race")} 
            onMouseOver={() => onHover(6)} 
            hovered={highlight === 6}
            className="tile" 
        />
        <Tile 
            tileName="multi_hatch" 
            occupancy={red[7] ? "_red" : (blue[7] ? "_blue" : "")}
            onClick={() => onClick(7, "race")} 
            onMouseOver={() => onHover(7)} 
            hovered={highlight === 7} 
            className="tile"
        />
        <Tile 
            tileName="rosette" 
            occupancy={red[8] ? "_red" : (blue[8] ? "_blue" : "")}
            onClick={() => onClick(8, "race")} 
            onMouseOver={() => onHover(8)} 
            hovered={highlight === 8} 
            className="tile"
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={red[9] ? "_red" : (blue[9] ? "_blue" : "")}
            onClick={() => onClick(9, "race")} 
            onMouseOver={() => onHover(9)} 
            hovered={highlight === 9} 
            className="tile"
        />
        <Tile 
            tileName="multi_hatch" 
            occupancy={red[10] ? "_red" : (blue[10] ? "_blue" : "")}
            onClick={() => onClick(10, "race")} 
            onMouseOver={() => onHover(10)} 
            hovered={highlight === 10} 
            className="tile"
        />
        <Tile 
            tileName="four_eyes" 
            occupancy={red[11] ? "_red" : (blue[11] ? "_blue" : "")}
            onClick={() => onClick(11, "race")} 
            onMouseOver={() => onHover(11)} 
            hovered={highlight === 11} 
            className="tile"
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={red[12] ? "_red" : (blue[12] ? "_blue" : "")}
            onClick={() => onClick(12, "race")} 
            onMouseOver={() => onHover(12)} 
            hovered={highlight === 12} 
            className="tile"
        />

    </div>
}

export default HomeRow;