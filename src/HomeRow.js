import Tile from './Tile';
import Well from './Well';
import './Row.css';


function HomeRow({occupancy, onClick}) {
    return <div className="homeRow">
        <Tile tileName="rosette" occupancy="" onClick={() => onClick(4)} />
        <Tile tileName="four_eyes" occupancy="" onClick={() => onClick(3)} />
        <Tile tileName="five_eyes" occupancy="" onClick={() => onClick(2)} />
        <Tile tileName="four_eyes" occupancy="" onClick={() => onClick(1)} />
        <Well />
        <Well />
        <Tile tileName="rosette" occupancy="" onClick={() => onClick(14)} />
        <Tile tileName="cross_hatch" occupancy="" onClick={() => onClick(13)} />
    </div>
}

export default HomeRow;