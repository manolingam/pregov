let db = [
    {
        id: 1,
        event_link: "MIP9",
        predicted_price_impact_percent: "30%",
        predicted_price_impact_dollar: 10,
        project_token_price_y: 5,
        project_token_price_n: 5,
    },
    {
        id: 2,
        event_link: "MIP9",
        predicted_price_impact_percent: "30%",
        predicted_price_impact_dollar: 10,
        project_token_price_y: 5,
        project_token_price_n: 5,
    },
    {
        id: 3,
        event_link: "MIP9",
        predicted_price_impact_percent: "30%",
        predicted_price_impact_dollar: 10,
        project_token_price_y: 5,
        project_token_price_n: 5,
    },
    {
        id: 4,
        event_link: "MIP9",
        predicted_price_impact_percent: "30%",
        predicted_price_impact_dollar: 10,
        project_token_price_y: 5,
        project_token_price_n: 5,
    },
    {
        id: 5,
        event_link: "MIP9",
        predicted_price_impact_percent: "30%",
        predicted_price_impact_dollar: 10,
        project_token_price_y: 5,
        project_token_price_n: 5,
    },
    {
        id: 6,
        event_link: "MIP9",
        predicted_price_impact_percent: "30%",
        predicted_price_impact_dollar: 10,
        project_token_price_y: 5,
        project_token_price_n: 5,
    },
];

exports.handler = async (event, context) => {
    const id = event.queryStringParameters.id || 0;

    if (id) {
        db.forEach((element) => {
            if (element.id === id) {
                return {
                    statusCode: 200,
                    body: element,
                };
            }
        });
    } else {
        return db;
    }
};
