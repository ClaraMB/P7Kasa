import React from "react";
import Card from "./../components/Card.jsx";
import logements from "./../datas/logements.json";
import { Link } from "react-router-dom";
import '../styles/gallery.css';

const Gallery = () => {
    return (
    <div className="background">
        {logements.map((logements) => { /*utilisation de la fonction map sur le tableau "logements". Elle parcourt chaque élément et exécute le code suivant pour chaque élément */
        return (
        <div key={logements.id}>
            <Link to={`/logement/${logements.id}`}> 
                <Card image={logements.cover} title={logements.title} />
            </Link>
        </div>
        );
        })}
    </div>
    );
};

export default Gallery;