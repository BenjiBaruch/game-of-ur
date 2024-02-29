import './Tile.css'
import { Pressable } from "react-native";

import { ReactComponent as WellRed1 } from "./assets/well-red-1.svg";
import { ReactComponent as WellRed2 } from "./assets/well-red-2.svg";
import { ReactComponent as WellRed3 } from "./assets/well-red-3.svg";
import { ReactComponent as WellRed4 } from "./assets/well-red-4.svg";
import { ReactComponent as WellRed5 } from "./assets/well-red-5.svg";
import { ReactComponent as WellRed6 } from "./assets/well-red-6.svg";
import { ReactComponent as WellRed7 } from "./assets/well-red-7.svg";
import { ReactComponent as WellBlue1 } from "./assets/well-blue-1.svg";
import { ReactComponent as WellBlue2 } from "./assets/well-blue-2.svg";
import { ReactComponent as WellBlue3 } from "./assets/well-blue-3.svg";
import { ReactComponent as WellBlue4 } from "./assets/well-blue-4.svg";
import { ReactComponent as WellBlue5 } from "./assets/well-blue-5.svg";
import { ReactComponent as WellBlue6 } from "./assets/well-blue-6.svg";
import { ReactComponent as WellBlue7 } from "./assets/well-blue-7.svg";

function Well({onClick, onMouseOver, color, quantity}) {
    const images = {
        well_red_1: <WellRed1 />,
        well_red_2: <WellRed2 />,
        well_red_3: <WellRed3 />,
        well_red_4: <WellRed4 />,
        well_red_5: <WellRed5 />,
        well_red_6: <WellRed6 />,
        well_red_7: <WellRed7 />,
        well_blue_1: <WellBlue1 />,
        well_blue_2: <WellBlue2 />,
        well_blue_3: <WellBlue3 />,
        well_blue_4: <WellBlue4 />,
        well_blue_5: <WellBlue5 />,
        well_blue_6: <WellBlue6 />,
        well_blue_7: <WellBlue7 />,
    }
    if (quantity > 0) {
        return (
            <Pressable 
                onClick={onClick} 
                onMouseOver={onMouseOver}
            >
                {images["well" + color + "_" + quantity]}
            </Pressable> 
        );
    }
    return <span onMouseOver={onMouseOver}/>
}

export default Well;