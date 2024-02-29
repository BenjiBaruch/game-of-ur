import Tile from './Tile';
import Well from './Well';
import './Row.css';


function HomeRow({occupancy, color, onClick, onHover, bottom, highlight, homeWell, endWell}) {
    const offset = bottom ? 0 : 16;
    return <div className="homeRow">
        <Tile 
            tileName="rosette" 
            occupancy={occupancy[4] === 1 ? color : ""} 
            onClick={() => onClick(4)} 
            onMouseOver={() => onHover(offset + 4)} 
            hovered={highlight === offset + 4} 
        />
        <Tile 
            tileName="four_eyes" 
            occupancy={occupancy[3] === 1 ? color : ""} 
            onClick={() => onClick(3)} 
            onMouseOver={() => onHover(offset + 3)} 
            hovered={highlight === offset + 3}
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={occupancy[2] === 1 ? color : ""} 
            onClick={() => onClick(2)} 
            onMouseOver={() => onHover(offset + 2)} 
            hovered={highlight === offset + 2}
        />
        <Tile 
            tileName="four_eyes" 
            occupancy={occupancy[1] === 1 ? color : ""} 
            onClick={() => onClick(1)} 
            onMouseOver={() => onHover(offset + 1)} 
            hovered={highlight === offset + 1}
        />
        <Well 
            onClick={() => onClick(0)}
            onMouseOver={() => onHover(-1)} 
            color={color}
            quantity={homeWell}
        />
        <Well 
            onClick={() => onClick(-1)}
            onMouseOver={() => onHover(-1)}
            color={color}
            quantity={endWell} 
        />
        <Tile 
            tileName="rosette" 
            occupancy={occupancy[14] === 1 ? color : ""} 
            onClick={() => onClick(14)} 
            onMouseOver={() => onHover(offset + 14)} 
            hovered={highlight === offset + 14}
        />
        <Tile 
            tileName="cross_hatch" 
            occupancy={occupancy[13] === 1 ? color : ""} 
            onClick={() => onClick(13)} 
            onMouseOver={() => onHover(offset + 13)} 
            hovered={highlight === offset + 13}
        />
    </div>
}

export default HomeRow;