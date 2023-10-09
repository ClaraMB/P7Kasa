import React from "react";
import { Link } from "react-router-dom";
import '../styles/error.css';

function ErrorPage() {
    return (
            <div className='errorBlock'>
                <p className="error_Number">404</p>
                <p className="error_Text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error_Link">Retourner sur la page d'accueil</Link>
            </div> 
    )
}

export default ErrorPage