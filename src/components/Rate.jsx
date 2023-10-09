import React from 'react';
<<<<<<< HEAD
import emptyStar from '../assets/star-regular.png';
=======
import emptyStar from '../assets/star-regular.svg';
>>>>>>> aaa900380a474e9d76a56bc1e93a25ba353e23ec
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