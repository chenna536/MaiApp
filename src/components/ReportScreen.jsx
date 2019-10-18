import React from 'react';
import { Link } from 'react-router-dom';

import Chart from './Chart.jsx';

// import 'react-circular-progressbar/dist/styles.css';
import Areas from './Areas.jsx';

const ReportScreen = () => {
    return (
        <div className="w3-container" style={{ width: '100%', padding: 0, fontSize: '1.2em' }}>
            <div className="w3-container" style={{ backgroundColor: '#FFD700', paddingBottom: '5em' }}>
                <div className="w3-margin-top w3-margin-left"><Link to="/dashboard"><i className="material-icons">arrow_back</i></Link></div>
                <div className="w3-container w3-margin-left">
                    <div className="w3-right" style={{ marginTop: '-1em', width: '100px' }}>
                        <Chart/>
                    </div>
                    <h1 style={{ margin: '0' }}>Harikrishna's</h1>
                    <h1 style={{ margin: '0' }}><b>Physical Report</b></h1>
                    <h4 style={{ marginTop: '1em', width: '80%' }}><b>Your child's physical development as per his age</b></h4>
                </div>
            </div>
            <div style={{ marginTop: '-5em' }}>
            <Areas />
            <Areas />
            <Areas />
            </div>
        </div>
    );
}

export default ReportScreen;
