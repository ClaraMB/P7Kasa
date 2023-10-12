import React from "react";
import '../styles/banner.css';

function Banner({ texte, image, classes }) {
    return (
            <div className={'banner ' + classes}>
                <h1>{texte}</h1>
                <img src={image} alt='Banniere'className='banner-img'/>
            </div> 
    )
}

export default Banner