import React from 'react';
import popsicleImage from './popsicle_image.jpg';
import './po-dash.css'


export default class PopsicleDashboard extends React.Component {

    render() {
        return <div className="popsicle-dash-dashboard">
            <div className="popsicle-dash-content">
                <h2>Popsicle Dash</h2>
                <img className="banner-image" src={popsicleImage} style={{maxWidth: "100%", maxHeight: "100%"}}/>

            </div>
        </div>
    }
}