import React  from 'react'
import PriceCard from './PriceCard.jsx'
import { Link } from 'react-router-dom';
import Tail from './Tail';
import trial from '../trial.png'
// import Box from '@material-ui/core/Box';

const CreativityPage = () => {

    return (
        <div className="w3-container w3-light-gray" style={{width: '100%',marginBottom: '15em',padding:0,fontSize: '1.2em'}}>
          <div className="">
            <div className="w3-margin-top w3-margin-left"><Link to="/dashboard"><i className="material-icons">arrow_back</i></Link></div>
            <div className="w3-container w3-center w3-light-gray" style={{
                  paddingLeft: '1em', paddingRight: '1em', margin:'0  1em 1em 1em'
                }}>
          <div className="w3-cell">
            <img src={trial} alt="Avatar" className="w3-circle" style={{ width: '62px' }} />
          </div>
          <div className=" w3-container w3-cell ">
            <p className="" style={{margin:'0.8em 1em 1em 1em'}}>
                <b>Harikrishna's Creativity</b>
            </p>
          </div>
          </div>
        </div>
        <div className="w3-container w3-white" style={{ borderRadius: '25px 25px 0 0'}}>
        <div className="w3-container w3-text-grey" style={{marginTop: '1em'}} >
        <div className="w3-container w3-margin-top">
          <span style={{ marginBottom: '0', paddingBottom: '10px', borderBottom: '1px solid lightgrey' }}>
            <b>Importance of Logic</b>
          </span>
        </div>
        <div>
            <p>&#x2713; Made in support with NIMHANS</p>
            <p>&#x2713; 100s of Kids across banglore</p>
            <p>&#x2713; Jump in test scores</p>
            <p>&#x2713; Backed by 7 years of scientific research</p>
            <p>&#x2713; Score high marks</p>
            <p>&#x2713; This is the best assessment.</p>
        </div>
        <div className="w3-center">
            <p style={{marginBottom: '0'}}><b>Areas impacted by unlocking Creativiy</b></p>
            </div>
            <hr style={{margin: '1em'}}  className="w3-light-gray"/>
        </div>
        <div className="w3-container  w3-cell-row" style ={{ marginTop:'0.5em', padding:0}}>
        <div className="w3-container w3-margin w3-cell" > 
        <Tail />
        </div>
        <div className="w3-container w3-margin w3-cell" > 
        <Tail />
        </div>
    </div>
    <div className="w3-container  w3-cell-row" style ={{ marginTop:'0.5em', padding:0}}>
        <div className="w3-container  w3-cell" > 
        <Tail />
        </div>
        <div className="w3-container w3-cell" > 
        <Tail />
        </div>
    </div>

      <div className="w3-margin w3-round-xlarge w3-light-gray">
        <div className="w3-container w3-cell ">
          <img src={trial} alt="Avatar" className="w3-circle" style={{ margin: '1em 0.2em 1em 0.4em', width: '62px' }} />
        </div>
        <div className="w3-container w3-cell">
          <p className="w3-text-grey" style={{fontSize: '1.1em',marginTop: '0.5em',marginBottom: '0.2em' }} >Never knew Shreya had skills. Highly valued & recommended.</p>
          <p style={{marginTop: '0' }}><b className="">-Sangeetha, mother of Shreya</b></p>
        </div>
      </div>
      
      <div className="w3-cell-row w3-card-4" style={{ /*boxShadow: '0px 0px 5px grey'*/ backgroundColor: "white" }}>
      <div className="w3-cell" style={{width: '50%', padding: '0.5em'}}>  
      <PriceCard data={{heading: `Logical ${'\n'} Genius`,text: "Unlock now", price: "Rs 199", color: "orange"}} />
      </div>
      <div className="w3-cell" style={{width: '50%', padding: '0.5em' }}>
      <PriceCard data={{heading: "Get all 7 genius \n tests",text: "Worth 1399", price: "Rs 699", color: "blue"}}/>
      </div>
      </div>
      <div className="w3-cell-row w3-card-4" style={{ /*boxShadow: '0px 0px 5px grey'*/ backgroundColor: "white" }}>
      <div className="w3-cell" style={{ width: '50%', padding: '0.5em'}}>  
      <PriceCard data={{heading: "Communication \n Genius ",text: "Unlock now", price: "Rs 199", color: "orange"}} />
      </div>
      <div className="w3-cell" style={{ width: '50%', padding: '0.5em' }}>
      <PriceCard data={{heading: "Get all 7 \n genius tests",text: "Worth 1399", price: "Rs 699", color: "blue"}}/>
      </div>
      </div>
      </div>
    </div>);
}
 
export default CreativityPage;