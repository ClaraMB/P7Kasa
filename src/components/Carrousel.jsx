import React from "react";
import { useState } from "react";
import '../styles/carrousel.css';
import chevron from '../assets/chevron.png';


function Carrousel(props) {
    const pictures = props.pictures; 
    const [currentIndex, setCurrentIndex] = useState(0); /* Utilisation du Hook UseState. Index de la première image à 0*/
	
    const length = pictures.length;

    const goToPreviousSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };
    
    const goToNextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const showChevrons = length > 1; /* Condition pour afficher les chevrons que s'il y a plus d'une image à afficher*/
    
    return(
        <div className="slider">
            {showChevrons && ( /* Si showChevrons est TRUE alors on affiche les chevrons*/
                <>
                    <img className='chevron_carrousel_left' src={chevron} alt='chevron gauche' onClick={goToPreviousSlide}/>
                    <img className='chevron_carrousel_right' src={chevron} alt='chevron droit' onClick={goToNextSlide}/>
                </>
            )}
            <img className="slider_img" src={pictures[currentIndex]} alt="" />
        </div>
    );  
}

export default Carrousel