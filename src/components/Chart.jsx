import React from 'react';
import "./Chart.css";


const Chart = (props) => {
    return (
        <div className="progress blue">
            <span className="progress-left" style={{ }}>
                <span className="progress-bar"></span>
            </span>
            <div className="w3-card-4 progress-value"><b>83%</b></div>
            <span className="progress-right">
                <span className="progress-bar"></span>
            </span>
        </div>
        );
}

export default Chart;
