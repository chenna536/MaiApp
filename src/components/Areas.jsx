import React from 'react';
import Rating from './Rating.jsx';
import CircularProgressBar from './CircularProgressBar';

const AreaDetails = () => {
    return (
        <div className="w3-display-container ">
            <p>Name: <b>Stamina</b></p>
            <p style={{ marginBottom: '0' }}>Description: <b>The ability to exert yourself physically over long periods of time without getting winded or out of breath.</b></p>
            <p >Child's Score:</p>
            <div className="w3-cell" style={{ padding: '0.3em' }}>
            <div className="w3-display-bottommiddle" >
          <CircularProgressBar
               strokeWidth="8"
               sqSize="60"
               percentage={75}/>
            </div>
            </div>
        </div>
    );
}

const Areas = () => {
    return (<div className="w3-container w3-card-2 w3-white " style={{ margin: '1em', borderRadius: '25px', padding:'1em' }}>
        <div className=" w3-container w3-margin-top w3-margin-bottom">
            <span style={{ marginBottom: '0', paddingBottom: '10px', borderBottom: '1px solid lightgrey' }}>
                <b>Areas of strength</b>
            </span>
            <div className="w3-right"><Rating rating='3' /></div>
        </div>
        <AreaDetails />
        <hr style={{ margin: 0 }} className="w3-light-gray" />
        <AreaDetails />
        <hr style={{ margin: 0 }} className="w3-light-gray" />
        <div className="w3-container">
            <p><b>Recommended hobbies</b> that your child is likely to excel at <b>Swimming, Aerobics,Gymnastics</b></p>
        </div>
    </div>);
}

export default Areas;
