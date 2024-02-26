import Tile from './Tile';
import Well from './Well';
import './HomeRow.css';


function HomeRow({occupancy, onClick}) {
    return <div>
        <Tile tileName="rosette" occupancy={occupancy[4]} onClick={() => onClick(4)} />
        <Tile tileName="four_eyes" occupancy={occupancy[3]} onClick={() => onClick(3)} />
        <Tile tileName="five_eyes" occupancy={occupancy[2]} onClick={() => onClick(2)} />
        <Tile tileName="four_eyes" occupancy={occupancy[1]} onClick={() => onClick(1)} />
        <Well />
        <Tile tileName="rosette" occupancy={occupancy[14]} onClick={() => onClick(14)} />
        <Tile tileName="cross-hatch" occupancy={occupancy[13]} onClick={() => onClick(13)} />
    </div>
}

export default HomeRow;