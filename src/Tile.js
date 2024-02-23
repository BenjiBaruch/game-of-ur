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
        rosette: require('./assets/rosette.svg'),
        rosette_hover: require('./assets/rosette-hover.svg'),
        rosette_red: require('./assets/rosette-red.svg'),
        rosette_red_hover: require('./assets/rosette-red-hover.svg'),
        rosette_blue: require('./assets/rosette-blue.svg'),
        rosette_blue_hover: require('./assets/rosette-blue-hover.svg'),
    }

    const path = '../assets/' + tileName + occupancy + (hovered ? "-hover" : "") + '.svg';
    const img = images[path];

    return (
        <Pressable 
            //className={tileName + occupancy + (hovered ? " hover" : "")}
            onClick={onClick} 
            onMouseOver={() => {setHovered(true)}} 
            onMouseOut={() => {setHovered(false)}} 
        > 
            <Image source={img} />
        </Pressable>
    );
}


export default Tile;