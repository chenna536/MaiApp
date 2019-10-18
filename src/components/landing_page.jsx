import React from 'react';
import { Link } from 'react-router-dom';

// let a = "hello \n <b>{Sangeetha}</b>";

// let newText = a.split('\n').map((item,i) => <p key={i}>{item}</p>);

const Landing = () => (
  <div className="w3-container" style={{ width: '100%', fontSize: '1.1em' }}>
    <div className="w3-container">
      <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-right w3-circle w3-margin-top" style={{ width: '80px' }} />
      <h4 style={{ marginTop: '1em', marginBottom: 0 }} className="w3-text-gray"><b>Hello,</b></h4>
      <h4 style={{ margin: 0 }}><b>Sangeetha</b></h4>
      {/* {newText} */}
    </div>
    <div className="w3-container">
      <p className="" style={{ fontSize: '1.1em' }}>Congratulations, on taking the first step in scientific parenting </p>
    </div>
    <div className="w3-container">
      <div className="w3-round-xlarge w3-light-gray">
        <div className="w3-container">
          <p id="did_u_know">
            <u><b>Did you know</b></u>
            <b> ?</b>
          </p>
          <p>
Over
            <b> 40,000 parents like you </b>
have taken our assessments to aid  in their childrens development
          </p>
        </div>
      </div>
    </div>
    <div className="w3-container">
      <div className="w3-margin-top w3-round-xlarge w3-light-gray">
        <div className="w3-container w3-cell ">
          <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-circle w3-margin-top" style={{ width: '50px' }} />
        </div>
        <div className="w3-container w3-cell">
          <p>The entire text took 20 minutes of my time, but was completely comprehensive and I loved the report which  i gave me insights on shreya.</p>
          <p><b>-Sangeetha, mother of shreya</b></p>
        </div>
      </div>
    </div>
    <div className="w3-container ">
      <div className="w3-margin-top w3-round-xlarge w3-center" style={{ background: 'linear-gradient(#430089, #82ffa1)' }}>
        <Link to="/assessment"><p className="w3-padding-16">Take assessment like Sangeetha</p></Link>
      </div>
    </div>
    <div className="w3-container">
      <Link to="/dashboard"><p className="w3-center w3-text-grey" style={{ margin: 0 }}>Skip and go to dashboard</p></Link>
    </div>
    <footer className="w3-margin-top w3-text-grey" style={{ marginBottom: '0' }}>
      <div className="w3-left w3-container" style={{ margin: 0, width: '100px' }}>
        <img src="https://dev.mai.family/app/548ab9453dbf023d454bd029819f58bd.png" alt="Avatar" className="w3-light-gray" style={{ width: '30px',marginRight:'0.5em' }} />
        <b className="w3-right w3-xlarge">mai</b>
      </div>
      <div className="w3-display-container" style={{height: '50px',fontSize:'1em'}}>
      <div className="w3-display-topright w3-container">
        <b>Smart Parenting &</b>
      </div>
      <div className="w3-display-bottomright w3-container ">
        <b>Child Growth Companion</b>
      </div>
      </div>
    </footer>
  </div>
);

export default Landing;
