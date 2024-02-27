import Tile from './Tile';
import Well from './Well';
import './Row.css';


function HomeRow({occupancy, onClick, onHover, bottom, highlight}) {
    const offset = bottom ? 0 : 16;
    return <div className="homeRow">
        <Tile tileName="rosette" occupancy="" onClick={() => onClick(4)} onMouseOver={() => onHover(offset + 4)} hovered={highlight === offset + 4} />
        <Tile tileName="four_eyes" occupancy="" onClick={() => onClick(3)} onMouseOver={() => onHover(offset + 3)} hovered={highlight === offset + 3}/>
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(2)} onMouseOver={() => onHover(offset + 2)} hovered={highlight === offset + 2}/>
        <Tile tileName="four_eyes" occupancy="" onClick={() => onClick(1)} onMouseOver={() => onHover(offset + 1)} hovered={highlight === offset + 1}/>
        <Well onMouseOver={() => onHover(-1)} />
        <Well onMouseOver={() => onHover(-1)} />
        <Tile tileName="rosette" occupancy="" onClick={() => onClick(14)} onMouseOver={() => onHover(offset + 14)} hovered={highlight === offset + 14}/>
        <Tile tileName="cross_hatch" occupancy="" onClick={() => onClick(13)} onMouseOver={() => onHover(offset + 13)} hovered={highlight === offset + 13}/>
    </div>
}

export default HomeRow;