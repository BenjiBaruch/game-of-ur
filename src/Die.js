import { ReactComponent as DieEmpty } from './assets/die-empty.svg';
import { ReactComponent as DieFull } from './assets/die-full.svg';
import './Tile.css';

function Die({occupancy}) {
    return occupancy === 0 ? <DieEmpty /> : <DieFull />;
}

export default Die;