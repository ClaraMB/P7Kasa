import React from "react";
import '../styles/tags.css';

function Tags({ nom }) {
    return (
    <div>
        <div className="tag">
            <span className="tag_content">{nom}</span>
        </div>
    </div>
    );
}

export default Tags;