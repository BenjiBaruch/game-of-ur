import { useState } from "react";
import { Button, Image, Pressable } from "react-native";

import './Tile.css';

/*
layer1 = ["four-eyes", "five-eyes", "cross-hatch", "multi-hatch", "rosette"]
layer2 = ["", "-red", "-blue"]
layer3 = ["", "-hover"]
for i1 in layer1:
    for i2 in layer2:
            for i3 in layer3:
                    name = i1 + i2 + i3
                    print(f"import \{ ReactComponent as {name.replace('-', '_')} \} from './assets/{name}.svg';")
*/

import { ReactComponent as FourEyes } from './assets/four-eyes.svg';
import { ReactComponent as FourEyesHover } from './assets/four-eyes-hover.svg';
import { ReactComponent as FourEyesRed } from './assets/four-eyes-red.svg';
import { ReactComponent as FourEyesRedHover } from './assets/four-eyes-red-hover.svg';
import { ReactComponent as FourEyesBlue } from './assets/four-eyes-blue.svg';
import { ReactComponent as FourEyesBlueHover } from './assets/four-eyes-blue-hover.svg';
import { ReactComponent as FiveEyes } from './assets/five-eyes.svg';
import { ReactComponent as FiveEyesHover } from './assets/five-eyes-hover.svg';
import { ReactComponent as FiveEyesRed } from './assets/five-eyes-red.svg';
import { ReactComponent as FiveEyesRedHover } from './assets/five-eyes-red-hover.svg';
import { ReactComponent as FiveEyesBlue } from './assets/five-eyes-blue.svg';
import { ReactComponent as FiveEyesBlueHover } from './assets/five-eyes-blue-hover.svg';
import { ReactComponent as CrossHatch } from './assets/cross-hatch.svg';
import { ReactComponent as CrossHatchHover } from './assets/cross-hatch-hover.svg';
import { ReactComponent as CrossHatchRed } from './assets/cross-hatch-red.svg';
import { ReactComponent as CrossHatchRedHover } from './assets/cross-hatch-red-hover.svg';
import { ReactComponent as CrossHatchBlue } from './assets/cross-hatch-blue.svg';
import { ReactComponent as CrossHatchBlueHover } from './assets/cross-hatch-blue-hover.svg';
import { ReactComponent as MultiHatch } from './assets/multi-hatch.svg';
import { ReactComponent as MultiHatchHover } from './assets/multi-hatch-hover.svg';
import { ReactComponent as MultiHatchRed } from './assets/multi-hatch-red.svg';
import { ReactComponent as MultiHatchRedHover } from './assets/multi-hatch-red-hover.svg';
import { ReactComponent as MultiHatchBlue } from './assets/multi-hatch-blue.svg';
import { ReactComponent as MultiHatchBlueHover } from './assets/multi-hatch-blue-hover.svg';
import { ReactComponent as Rosette } from './assets/rossette.svg';
import { ReactComponent as RosetteHover } from './assets/rossette-hover.svg';
import { ReactComponent as RosetteRed } from './assets/rossette-red.svg';
import { ReactComponent as RosetteRedHover } from './assets/rossette-red-hover.svg';
import { ReactComponent as RosetteBlue } from './assets/rossette-blue.svg';
import { ReactComponent as RosetteBlueHover } from './assets/rossette-blue-hover.svg';



function Tile({tileName, occupancy, onClick, onMouseOver, hovered, className}) {

    const images = {
        four_eyes: <FourEyes />,
        four_eyes_hover: <FourEyesHover />,
        four_eyes_red: <FourEyesRed />,
        four_eyes_red_hover: <FourEyesRedHover />,
        four_eyes_blue: <FourEyesBlue />,
        four_eyes_blue_hover: <FourEyesBlueHover />,
        five_eyes: <FiveEyes />,
        five_eyes_hover: <FiveEyesHover />,
        five_eyes_red: <FiveEyesRed />,
        five_eyes_red_hover: <FiveEyesRedHover />,
        five_eyes_blue: <FiveEyesBlue />,
        five_eyes_blue_hover: <FiveEyesBlueHover />,
        cross_hatch: <CrossHatch />,
        cross_hatch_hover: <CrossHatchHover />,
        cross_hatch_red: <CrossHatchRed />,
        cross_hatch_red_hover: <CrossHatchRedHover />,
        cross_hatch_blue: <CrossHatchBlue />,
        cross_hatch_blue_hover: <CrossHatchBlueHover />,
        multi_hatch: <MultiHatch />,
        multi_hatch_hover: <MultiHatchHover />,
        multi_hatch_red: <MultiHatchRed />,
        multi_hatch_red_hover: <MultiHatchRedHover />,
        multi_hatch_blue: <MultiHatchBlue />,
        multi_hatch_blue_hover: <MultiHatchBlueHover />,
        rosette: <Rosette />,
        rosette_hover: <RosetteHover />,
        rosette_red: <RosetteRed />,
        rosette_red_hover: <RosetteRedHover />,
        rosette_blue: <RosetteBlue />,
        rosette_blue_hover: <RosetteBlueHover />,
    }

    const name = tileName + occupancy + (hovered ? "_hover" : "");
    const img = images[name];

    return (
        <div className={className}>
            <Pressable 
                onPress={onClick} 
                onMouseOver={onMouseOver}
            > 
                {img}
            </Pressable>
        </div>
    );
}


export default Tile;