import Tile from './Tile';
import Well from './Well';
import './Row.css';


function HomeRow({occupancy, color, onClick, onHover, bottom, highlight, homeWell, endWell}) {
    const offset = bottom ? 0 : 16;
    const alignment = bottom ? "tile tileBottom" : "tile tileTop";
    return <div className={bottom ? "homeRow bottom" : "homeRow top"}>
        <Tile 
            tileName="rosette" 
            occupancy={occupancy[4] ? color : ""} 
            onClick={() => onClick(4, color)} 
            onMouseOver={() => onHover(offset + 4)} 
            hovered={highlight === offset + 4} 
            className={alignment}
        />
        <Tile 
            tileName="four_eyes" 
            occupancy={occupancy[3] ? color : ""} 
            onClick={() => onClick(3, color)} 
            onMouseOver={() => onHover(offset + 3)} 
            hovered={highlight === offset + 3}
            className={alignment}
        />
        <Tile 
            tileName="five_eyes" 
            occupancy={occupancy[2] ? color : ""} 
            onClick={() => onClick(2, color)} 
            onMouseOver={() => onHover(offset + 2)} 
            hovered={highlight === offset + 2}
            className={alignment}
        />
        <Tile 
            tileName="four_eyes" 
            occupancy={occupancy[1] ? color : ""} 
            onClick={() => onClick(1, color)} 
            onMouseOver={() => onHover(offset + 1)} 
            hovered={highlight === offset + 1}
            className={alignment}
        />
        <Well 
            onClick={() => onClick(0, color)}
            onMouseOver={() => onHover(offset)} 
            color={color}
            quantity={homeWell}
        />
        <Well 
            onClick={() => onClick(-1, "")}
            onMouseOver={() => onHover(-1)}
            color={color}
            quantity={endWell} 
        />
        <Tile 
            tileName="rosette" 
            occupancy={occupancy[14] ? color : ""} 
            onClick={() => onClick(14, color)} 
            onMouseOver={() => onHover(offset + 14)} 
            hovered={highlight === offset + 14}
            className={alignment}
        />
        <Tile 
            tileName="cross_hatch" 
            occupancy={occupancy[13] ? color : ""} 
            onClick={() => onClick(13, color)} 
            onMouseOver={() => onHover(offset + 13)} 
            hovered={highlight === offset + 13}
            className={alignment}
        />
    </div>
}

export default HomeRow;