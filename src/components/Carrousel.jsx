import React from "react";
import { useState } from "react";
import '../styles/carrousel.css';
<<<<<<< HEAD
import chevron from '../assets/chevron.png';
=======
>>>>>>> aaa900380a474e9d76a56bc1e93a25ba353e23ec


function Carrousel(props) {
    const pictures = props.pictures; 
<<<<<<< HEAD
    const [currentIndex, setCurrentIndex] = useState(0); /* Utilisation du Hook UseState. Index de la première image à 0*/
	
    const length = pictures.length;

    const goToPreviousSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex - 1);
    };
    
    const goToNextSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex + 1);
    };


    return(
        <div className="slider">
            <img className='chevron_carrousel_left' src={chevron} alt='chevron gauche'onClick={goToPreviousSlide}/>
            <img className='chevron_carrousel_right' src={chevron} alt='chevron droit' onClick={goToNextSlide}/>
        {pictures.map((image, index) => (
            <img className="slider_img" key={index} src={image} alt=""></img>
=======
    const [currentIndex, SetCurrentUser] = useState(0);
	
    return(
        <div className="slider">
        {pictures.map((image, index) => (
            <img key={index} src={image} alt=""></img>
>>>>>>> aaa900380a474e9d76a56bc1e93a25ba353e23ec
            ))}
        </div>
    );  
}

export default Carrousel