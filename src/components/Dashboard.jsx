/* eslint-disable import/extensions */
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import ReportCard from './ReportCard.jsx';
import fetchData from './fetchCall.jsx';
import PriceCard from './PriceCard.jsx';

/*
child id_1: "5d5119befbe629314974ca0d"
child_id_2: "5d7c8f4c43b7a55700fb48c9"
geniusID : 5d7a40a3990bef19dd71b697
 */

const URL = "http://192.168.1.106:3000/api/v2.1/child/5d9713180d29233f0251900d/dashboard";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDdmOWVhNDcxZTU4MzJjYTIzODhhMyIsImlhdCI6MTU3MDE4MTg4OX0.poMhIOwDhkBfMt2S7QuhffHxTYTKlx67ge8tOXiFdrU";

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState([{ data: [], status: 'INIT' }]);
  const [status, setStatus] = useState('loading');

  const getData = async () => {
    const response = await fetchData(URL, accessToken);
    await setDashboardData(response.data.data.data);
    await setStatus(response.status);
    return response.data.data.data;
  };

  useEffect(() => {
    getData().then((data) => console.log(data))
  }, []);

  return (
    <div className="w3-container" style={{ width: '100%' }}>
      <Link to="/"><button className="w3-button w3-white w3-xxlarge" type="button" style={{ margin: 0, padding: '8px' }}>&#9776;</button></Link>
      {(status === 'SUCCESS') ? (
        <>
          <div className="w3-container">
            <div className="w3-display-container w3-right">
              <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-circle" style={{ width: '110px' }} />
              <i style={{ paddingRight: '1em', paddingBottom: '1em' }} className="w3-circle fa fa-caret-down w3-display-bottomright" />
            </div>
            <h4 style={{ marginTop: '1em', marginBottom: 0, fontSize: '2em' }} ><b>Hello,</b></h4>
            <h4 style={{ margin: 0, fontSize: '2em' }}><b>Sangeetha</b></h4>
            {/* <h4 style={{ margin: 0, fontSize: '2em' }}><b>{dashboardData.title}</b></h4> */}
            <div className="w3-margin-top w3-round-xlarge w3-center w3-right" style={{ backgroundColor: 'lightgray' }}>
              <div className="" style={{ padding: '0.5em 1em', }}>Hari Krishna</div>
            </div>
          </div>
          <div className="w3-container w3-margin-top">
            <p className="w3-text-gray" style={{ fontSize: '1.3em' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet consequuntur asperiores dolorum, beatae sed modi quam tempora totam maiores.
              {/* {dashboardData.subTitle} */}
            </p>
          </div>

          {/* Hit Api  */}

          {/* {dashboardData.profileBlocks.map((track) => {
            return (<ReportCard key={track.key} data={{_id: track._id, heading: track.displayName, image: track.images[0], text: track.status, buttonBgColor: track.buttonBgColor, buttonTextColor: track.buttonTextColor, link: 'assessment', cardColor: track.cardColor }} />);
          })}  */}
          {/* {console.log(dashboardData)} */}
          {dashboardData.profileBlocks.map((track, i) => {
                            switch (track.cardType) {
                                case 'ASSESSMENT':
                                    return <ReportCard key={track.key} data={{_id: track._id, heading: track.displayName, image: track.icon, text: track.status, buttonBgColor: track.buttonBgColor, buttonTextColor: track.buttonTextColor, link: 'assessment', cardColor: track.cardColor }} />;
                                case 'CTA':
                                    return (<div key={i} className="w3-container w3-margin">
                                      Price Card
                                        </div> );
                                // case 'CTA':
                                //   return (<div key={i} className="w3-container w3-margin-top w3-margin">
                                //       <PriceCard data={{ heading: obj.title, text: obj.subTitle, price: obj.buttonLabel, color: obj.buttonColor }} />
                                //       </div> );
                                default :
                                    return '';
                            }
          })}

          {/* {console.log(dashboardData.profileBlocks)} */}
          {/* <ReportCard data={{ heading: 'Social Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'Mics Report', buttonBgColor: 'gray', link: 'micsreport' }} />
          <PriceCard data={{ heading: "Unlock all 7 genius tests", text: "Worth Rs.1399 Limited time offer.", price: "Rs 699 only!", color: "blue", }} />
          <ReportCard data={{ heading: 'Social Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'View Report', link: 'report' }} />
          <ReportCard data={{ heading: 'Social Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'Creativity Page', link: 'creativity' }} />
          <ReportCard data={{ heading: 'Social Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'Unlock Now', link: 'creativity' }} />
          <ReportCard data={{ heading: 'Social Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'Unlock Now', link: 'creativity' }} />
          <PriceCard data={{ heading: "Unlock all 7 genius tests", text: "Worth Rs.1399 Limited time offer.", price: "Rs 699 only!", color: "blue" }} /> */}
        </>
      ) : (
          <div key={0} className="w3-center w3-xlarge">
            Loading...
      </div>
        )}

    </div>
  );
}

export default Dashboard;
