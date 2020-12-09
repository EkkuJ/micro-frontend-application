import React from 'react';

export default class AlienDashboard extends React.Component {

    render() {
        return <div className="alien-abyss-dashboard">
            <div className="alien-abyss-content">
                <h2>Alien Abyss</h2>
                <h3>Statistics</h3>
                <h4>Downloads today:</h4>
                <p>60 433</p>
                <h4>Ad revenue today:</h4>
                <p>3520 €</p>
                <h3>LATEST BUILDS</h3>
                <p>v3.2 (01.12.2020)</p>
                <p>v3.1 (12.10.2020)</p>
                <p>v3.0 (07.09.2020)</p>

            </div>
        </div>
    }
}