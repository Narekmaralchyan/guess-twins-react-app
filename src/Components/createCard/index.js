import moon from './icons/moon.png'
import earth from './icons/earth.jpg'
import sky from './icons/sky.jpg'
import mars from './icons/mars.png'
import galaxy from './icons/galaxy.jpg'
import jupiter from './icons/jupiter.jpg'

import { useState } from "react";

function CreateCard(props) {
    
    let image;
    switch(props.name){
        case "moon":image= moon;break;
        case "earth":image= earth;break;
        case "sky":image=sky;break;
        case "mars":image=mars;break;
        case "jupiter":image=jupiter;break;
        case "galaxy":image=galaxy;break;
    }
    function onClick() {
        if (props.clickable) {
            props.show(props.name, props.value);
        }

    }

    return (
        <div  onClick={onClick} className={props.name + " card"}>
            {props.opened ? <img className='images' src={image}  alt={props.name} /> : <h1 className='textShow'>SHOW</h1>}
        </div>
    )
}
export default CreateCard;