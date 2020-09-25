import React from "react";
import { withRouter } from "react-router-dom";

import "../styles/css/components.css";

const Instance = (props) => {
    return (
        <div
            className='instance'
            onClick={() => {
                props.history.push(`/create/${props.instance_id}`);
            }}
        >
            <p>{props.event_link}</p>
            <p>{props.price_impact}</p>
            <button
                onClick={() => {
                    props.history.push(`/create/${props.instance_id}`);
                }}
            >
                View
            </button>
        </div>
    );
};

export default withRouter(Instance);
