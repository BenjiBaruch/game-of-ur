import { useState } from "react";
import { Button, Image, Pressable } from "react-native";


function Tile({tileName, occupancy, onClick}) {
    const [hovered, setHovered] = useState(false);

    const images = {
        cross_hatch: require('./assets/cross-hatch.svg'),
        cross_hatch_hover: require('./assets/cross-hatch-hover.svg'),
        cross_hatch_red: require('./assets/cross-hatch-red.svg'),
        cross_hatch_red_hover: require('./assets/cross-hatch-red-hover.svg'),
        cross_hatch_blue: require('./assets/cross-hatch-blue.svg'),
        cross_hatch_blue_hover: require('./assets/cross-hatch-blue-hover.svg'),
        multi_hatch: require('./assets/multi-hatch.svg'),
        multi_hatch_hover: require('./assets/multi-hatch-hover.svg'),
        multi_hatch_red: require('./assets/multi-hatch-red.svg'),
        multi_hatch_red_hover: require('./assets/multi-hatch-red-hover.svg'),
        multi_hatch_blue: require('./assets/multi-hatch-blue.svg'),
        multi_hatch_blue_hover: require('./assets/multi-hatch-blue-hover.svg'),
        four_eyes: require('./assets/four-eyes.svg'),
        four_eyes_hover: require('./assets/four-eyes-hover.svg'),
        four_eyes_red: require('./assets/four-eyes-red.svg'),
        four_eyes_red_hover: require('./assets/four-eyes-red-hover.svg'),
        four_eyes_blue: require('./assets/four-eyes-blue.svg'),
        four_eyes_blue_hover: require('./assets/four-eyes-blue-hover.svg'),
        five_eyes: require('./assets/five-eyes.svg'),
        five_eyes_hover: require('./assets/five-eyes-hover.svg'),
        five_eyes_red: require('./assets/five-eyes-red.svg'),
        five_eyes_red_hover: require('./assets/five-eyes-red-hover.svg'),
        five_eyes_blue: require('./assets/five-eyes-blue.svg'),
        five_eyes_blue_hover: require('./assets/five-eyes-blue-hover.svg'),
        rossette: require('./assets/rossette.svg'),
        rossette_hover: require('./assets/rossette-hover.svg'),
        rossette_red: require('./assets/rossette-red.svg'),
        rossette_red_hover: require('./assets/rossette-red-hover.svg'),
        rossette_blue: require('./assets/rossette-blue.svg'),
        rossette_blue_hover: require('./assets/rossette-blue-hover.svg'),
    }

    const name = tileName + occupancy + (hovered ? "_hover" : "");
    const img = images[name];
    console.log(name);

    return (
        <Pressable 
            //className={tileName + occupancy + (hovered ? " hover" : "")}
            onClick={onClick} 
            onMouseOver={() => {setHovered(true)}} 
            onMouseOut={() => {setHovered(false)}} 
        > 
            <img source={img} alt={name} />
        </Pressable>
    );
}


export default Tile;