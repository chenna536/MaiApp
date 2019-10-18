/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ReportCard = ({ data }) => {
  
  return (
    // console.log(data),
  <div className="w3-container w3-margin-top" style = {{ fontSize: '1.2em' }}>
    <div className="w3-round-xlarge w3-card-2" style = {{ backgroundColor:  "white" }}>
      <div className="w3-container w3-margin">
        <div className="w3-container w3-margin-top">
          <span style={{ marginTop: '1em',color: data.buttonBgColor, paddingBottom: '10px', borderBottom: '1px solid grey' }}>
            <b>{data.heading}</b>
          </span>
        </div>
        <div className="w3-container w3-margin-top">
          <div className="w3-cell">
            <img src={data.image} className="" alt="Avatar" style={{ width: '80px', height: '80px' }} />
          </div>
          <div className="w3-cell ">
            <p>
            <Link to={`/${data.link}`}>
              <button
                type="button"
                className="w3-button w3-round-xxlarge"
                style={{
                  paddingLeft: '2em', paddingRight: '2em', color: data.buttonTextColor||'white',background: data.buttonBgColor||'linear-gradient(180deg, rgba(241, 95, 27, 0.8) 0%, #F15F1B 100%)', marginLeft: '1.5em',
                }}
              >
                <b>{data.text}</b>
              </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ReportCard;
