import React from "react";

import "../styles/css/components.css";

const Instance = ({ event_link, price_impact }) => {
    return (
        <div className='instance'>
            <p>{event_link}</p>
            <p>{price_impact}</p>
            <button>View</button>
        </div>
    );
};

export default Instance;
