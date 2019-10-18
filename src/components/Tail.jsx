import React from 'react';
import CircularProgressBar from './CircularProgressBar';

// import Chart from './Chart.jsx';

const Tail = (props) => {
  return (
    <div className="w3-container w3-round-xlarge tail" style={{background: 'linear-gradient(180deg, rgba(248, 154, 15, 0.8) 0%, #F89A0F 100%)', height: '130px'}} >
      <div className="w3-padding w3-display-container" >
        <div className="w3-display-right" style={{ height: '100%', marginTop: '0.5em'}} >
          <CircularProgressBar
               strokeWidth="20"
               sqSize="60"
               percentage={80}/>
        </div>
      </div>
      <div className="w3-container" style={{ width: '100%', marginTop: '2.5em' }}>
        <p className="w3-text-white" style={{  marginBottom: '0.2em' }} ><b>{props.name || "Tail Name"}</b></p>
      </div>
    </div>
    );
}

export default Tail;
