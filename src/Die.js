import { ReactComponent as DieEmpty } from './assets/die-empty.svg';
import { ReactComponent as DieFull } from './assets/die-full.svg';
import './Tile.css';

function Die({occupancy}) {
    const img = occupancy === 0 ? <DieFull /> : <DieEmpty />;
    return (
        <div className="tile">
            {img}
        </div>
    )
}

export default Die;