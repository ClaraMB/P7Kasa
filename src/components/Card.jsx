import React from "react";
import '../styles/card.css';

function Card({image, title}) { 
	return (
		<div className="card-logement-block">
			<img src={image} alt={title} className="card_img" />
				<p className="card-logement-title">{title}</p>
		</div>
	);
}

export default Card