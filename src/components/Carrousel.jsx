import React from "react";
import { useState } from "react";
import '../styles/carrousel.css';


function Carrousel(props) {
    const pictures = props.pictures; 
    const [currentIndex, SetCurrentUser] = useState(0);
	
    return(
        <div className="slider">
        {pictures.map((image, index) => (
            <img key={index} src={image} alt=""></img>
            ))}
        </div>
    );  
}

export default Carrousel