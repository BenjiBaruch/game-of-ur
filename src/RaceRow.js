import Tile from './Tile';
import './Row.css';


function HomeRow({red, blue, onClick, onHover, highlight}) {
    return <div className="raceRow">
        <Tile 
            tileName="multi_hatch" 
            occupancy={red[5] === 1 ? "_red" : (blue[5] === 1 ? "_blue" : "")}
            onClick={() => onClick(5)} 
            onMouseOver={() => onHover(5)} 
            hovered={highlight === 5} 
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={red[6] === 1 ? "_red" : (blue[6] === 1 ? "_blue" : "")}
            onClick={() => onClick(6)} 
            onMouseOver={() => onHover(6)} 
            hovered={highlight === 6} 
        />
        <Tile 
            tileName="multi_hatch" 
            occupancy={red[7] === 1 ? "_red" : (blue[7] === 1 ? "_blue" : "")}
            onClick={() => onClick(7)} 
            onMouseOver={() => onHover(7)} 
            hovered={highlight === 7} 
        />
        <Tile 
            tileName="rosette" 
            occupancy={red[8] === 1 ? "_red" : (blue[8] === 1 ? "_blue" : "")}
            onClick={() => onClick(8)} 
            onMouseOver={() => onHover(8)} 
            hovered={highlight === 8} 
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={red[9] === 1 ? "_red" : (blue[9] === 1 ? "_blue" : "")}
            onClick={() => onClick(9)} 
            onMouseOver={() => onHover(9)} 
            hovered={highlight === 9} 
        />
        <Tile 
            tileName="multi_hatch" 
            occupancy={red[10] === 1 ? "_red" : (blue[10] === 1 ? "_blue" : "")}
            onClick={() => onClick(10)} 
            onMouseOver={() => onHover(10)} 
            hovered={highlight === 10} 
        />
        <Tile 
            tileName="four_eyes" 
            occupancy={red[11] === 1 ? "_red" : (blue[11] === 1 ? "_blue" : "")}
            onClick={() => onClick(11)} 
            onMouseOver={() => onHover(11)} 
            hovered={highlight === 11} 
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={red[12] === 1 ? "_red" : (blue[12] === 1 ? "_blue" : "")}
            onClick={() => onClick(12)} 
            onMouseOver={() => onHover(12)} 
            hovered={highlight === 12} 
        />

    </div>
}

export default HomeRow;