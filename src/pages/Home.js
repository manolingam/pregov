import React from "react";

import Instance from "../components/Instance";

import "../styles/css/pages.css";

const { instance } = require("../utils/MockData");

const Home = () => {
    return (
        <div className='home'>
            <h2>PreGov</h2>
            <p id='title-helper'>
                Know the impact of your governance decisions before you make
                them
            </p>
            <button id='create-instance'>Create PreGov Instance</button>
            <div>
                <p>Event Link</p>
                <p>Predicted Price Impact</p>
                <p>More Info</p>
            </div>
            {instance.map((instance, index) => {
                return (
                    <Instance
                        key={index}
                        event_link={instance.event_link}
                        price_impact={instance.predicted_price_impact}
                    />
                );
            })}
        </div>
    );
};

export default Home;
