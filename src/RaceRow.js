import Tile from './Tile';
import './Row.css';


function HomeRow({occupancy, onClick}) {
    return <div className="raceRow">
        <Tile tileName="multi_hatch" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="multi_hatch" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="rosette" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="multi_hatch" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="four_eyes" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(4)} />

    </div>
}

export default HomeRow;