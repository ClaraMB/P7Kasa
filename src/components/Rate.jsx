import React from 'react';
import emptyStar from '../assets/star-regular.svg';
import starSolid from '../assets/star-solid.png';
import '../styles/rate.css';

function Rate(props){
    const score = props.score
    const rating = [1, 2, 3, 4, 5];
    

    return(
        <div className="block_stars">
            {rating.map((ratingElem) => score >= ratingElem ? (
            <img key={ratingElem.toString()}className='star' src={starSolid} alt='star'/>
            ) : (
                <img key={ratingElem.toString()} className='star' src={emptyStar} alt='star'/>
            )
            )}
        </div>
    )
}

export default Rate;