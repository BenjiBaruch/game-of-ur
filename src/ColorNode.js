import './Well.css'

import { ReactComponent as NodeRed } from "./assets/node-red-2.svg";
import { ReactComponent as NodeBlue } from "./assets/node-blue-2.svg";

function ColorNode({activePlayer}) {
    const img = activePlayer === 0 ? <NodeRed /> : <NodeBlue />;
    return (
        <div className="colorNode">
            {img}
        </div>
    )
}

export default ColorNode;