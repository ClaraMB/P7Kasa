import React from "react";
import { useState } from "react";
import '../styles/collapse.css';
import chevron from '../assets/chevron.png';

function Collapse({ title, content }) {
    const [active, setActive] = useState(false) /*le state est mis en false par défaut, le collapse est fermé */
    
    const handleToggle = e => {
    setActive(!active)
}
    return (
            <div className={`collapse ${active && "active"}`}>
                <div className="collapse_title" onClick={handleToggle}>
                {title} 
                    <img className='chevron' src={chevron} alt='chevron'/>
                </div>
            <div className="collapse_content">{content}</div>
    </div>
    )
}

export default Collapse