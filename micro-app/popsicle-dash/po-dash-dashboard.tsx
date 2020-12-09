import React from 'react';

export default class PopsicleDashboard extends React.Component {

    render() {
        return <div className="popsicle-dash-dashboard">
            <div className="popsicle-dash-content">
                <h2>Popsicle Dash</h2>
                <h3>Upcoming events</h3>
                <p> 24.12.2020: ChisDash</p>
                <p> 31.12.2020: Final Dash</p>
                <p> 1.1.2021: New Year, New Dash</p>
                <h3>Most purchased items this week</h3>
                <p>NitroDash: 35 788</p>
                <p>DashPackage: 23 435</p>
                <p>Revive: 12 398</p>


            </div>
        </div>
    }
}