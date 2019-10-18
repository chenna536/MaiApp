import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tail from './Tail.jsx';
import PriceCard from './PriceCard.jsx'
import fetchData from './fetchCall.jsx';
import micsStaticData from './micsData.js';

const URL = "https://dev.mai.family/api/v2.1/child/5d78859df0e5fc02584ea748/report/mics";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTExOGYzZmJlNjI5MzE0OTc0Y2EwYiIsImlhdCI6MTU2ODI4ODA1M30.9u2qEGzvcwbzV0A7vWQfZSn_UkvkkU43GK6cWTcIoJc";

const Preference = (props) => {
    return (<>
        <div className="w3-container w3-margin w3-padding">
            <span style={{ paddingBottom: '0.5em', borderBottom: '1px solid lightgray' }}>
                <b >{props.payLoad.title}</b>
            </span>
            <p style={{ margin: 0, paddingTop: '1em', fontSize: '1em' }}>{props.payLoad.description}</p>
        </div>
        {/* {props.payLoad.data.map()} */}
        <div className="w3-container w3-cell-row" >
            <div className="w3-container  w3-cell" style={{ margin: 0, width:'50%' }} >
                <Tail name={props.payLoad.data[0].name} achieved={props.payLoad.data[0].achieved} />
            </div>
            <div className="w3-container  w3-cell" style={{ margin: 0, width:'50%' }}>
                <Tail name={props.payLoad.data[1].name} achieved={props.payLoad.data[1].achieved} />
            </div>
        </div>
        <div className="w3-container w3-cell-row"  style={{ marginTop: '1em',}} >
            <div className="w3-container w3-cell" style={{ margin: '0', width:'50%' }} >
                <Tail name={props.payLoad.data[0].name} achieved={props.payLoad.data[0].achieved} />
            </div>
            <div className="w3-container w3-cell" style={{ margin: '0', width:'50%' }} >
                {/* <Tail name={props.payLoad.data[0].name} achieved={props.payLoad.data[0].achieved} /> */}
            </div>
        </div>
    </>);
}

const Services = (props) => {
    return (<>
        <div className="w3-container">
            <div className="w3-margin-top w3-round-xlarge w3-text-gray w3-light-gray">
                <div className="w3-container w3-cell" style={{ width: '100%' }}>
                    {(!props.payLoad.services) ? '' : <p><b>{props.payLoad.title}</b></p>}
                    {(!props.payLoad.services) ? <p style={{ paddingTop: '1em' }}><b>{props.payLoad.title}</b></p> : <p>{props.payLoad.services.map((obj,i) => { return obj.name + ((props.payLoad.services.length-1!==i)? ', ':'.') })}</p>}
                    {/* <p>The entire text took 20 minutes of my time, but was completely comprehensive.</p> */}
                </div>
                <div className="w3-container w3-cell" >
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-circle " style={{ width: '70px' }} />
                </div>
                <div className="w3-card" style={{ width: '8em', borderRadius: '25px' }}>
                    <button className="w3-button w3-light-gray w3-text-gray w3-round-xxlarge" style={{ margin: 0, width: '100%' }}><b>View Offers</b></button>
                </div>
            </div>
        </div>
    </>);
}


const Hobbies = (props) => {
    return (<>
        <div className="w3-container w3-margin-top w3-light-grey w3-text-gray " style={{ margin: '1em', borderRadius: '25px', padding: '1em 8px 2em 8px' }}>
            <div className="w3-container w3-padding">
                <div style={{ fontSize: '1em' }}><b>{props.payLoad.title}</b></div>
                <span className="w3-text-black ">
                    <b>{props.payLoad.subTitle}</b>
                </span>
                {/* <div className="w3-gray" style={{height: '1px'}}></div> */}
                <hr className="w3-gray" style={{ margin: '0.5em  0 0 0' }} />
                <p style={{ margin: 0, paddingTop: '1em', fontSize: '1em' }}>{props.payLoad.description}</p>
            </div>
            {props.payLoad.data.map((obj, i) => <Services key={i} payLoad={obj} />)}
        </div>
    </>);
}

const Video = (props) => {
    return (<>
        <div className="w3-container w3-center">
            <p style={{ color:'black', marginTop: '2em', fontSize: '1.2em' }}><b>{props.payLoad.title}</b></p>
            <video controls disablePictureInPicture controlsList="nodownload" width="90%" poster={props.payLoad.data[0].coverImageURL} src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
            </video>
        </div>
    </>)
}


const MICSReport = () => {

    const [micsData, setMicsData] = useState([{ data: [], status: 'INIT' }]);
    const [status, setStatus] = useState('loading');
    const getMicsReport = async () => {
        // const response = await fetchData(URL, accessToken);
        // await setMicsData(response.data.data.data);
        // console.log(response)
        // await setStatus(response.status);
        // return response.data.data.data;
        await setMicsData(micsStaticData.data);
        await setStatus('SUCCESS');
        return micsStaticData.data;
    };

    useEffect(() => {
        // setMicsData(micsStaticData.data)
        getMicsReport().then((data) => console.log(data))
    }, []);

    return (
        <div className="w3-container w3-light-gray" style={{ width: '100%', marginBottom: '10em', padding: 0, fontSize: '1em' }}>
            {(status === 'SUCCESS') ? (
                <>
                    {/* {console.log(micsData)} */}
                    <div className="">
                        <div className="w3-margin-top w3-margin-left"><Link to="/dashboard"><i className="material-icons">arrow_back</i></Link></div>
                        <div className="w3-container w3-center " style={{
                            paddingLeft: '1em', paddingRight: '1em', margin: '0  1em 1em 1em', backgroundColor: micsData.bgColor
                        }}>
                            <div className="w3-cell">
                                <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-circle" style={{ width: '60px' }} />
                            </div>
                            <div className=" w3-container w3-cell">
                                <p className="" style={{ marginLeft: '0.6em' }}>
                                    <b style={{ fontSize: '1.3em'}}>{micsData.displayName} Report</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w3-container w3-text-gray w3-white" style={{ padding: 0, borderRadius: '25px 25px 0 0' }}>
                        <Video payLoad={micsData.report[0]} />
                        <div className="w3-container w3-margin-top w3-light-grey w3-text-gray" style={{ margin: '1em', borderRadius: '25px', padding: '1em 8px 2em 8px' }}>
                            <div className="w3-container ">
                                <p><b>Multiple Intelligences and Learning Styles.</b></p>
                                <p style={{ marginBottom: '0' }}>The ability to exert yourself physically over long periods of time without getting winded.</p>
                            </div>
                            <div className="w3-container" style={{ fontSize: '1em' }}>
                                <p><b>In this report you will find.</b></p>
                                <p style={{}}>1.The ability to exert yourself physically over long periods</p>
                                <p style={{}}>2.The ability to exert yourself</p>
                                <p style={{}}>3.The ability to exert yourself physically over long periods yourself physically over long periods</p>
                            </div>
                        </div>
                        {micsData.report.map((obj, i) => {
                            switch (obj.type) {
                                case 'MI_PREFERENCE':
                                    return <Preference key={i} payLoad={obj} />;
                                case 'UNLOCK_BULK_TYPE':
                                    return (<div key={i} className="w3-container w3-margin-top w3-margin">
                                        <PriceCard data={{ heading: obj.title, text: obj.subTitle, price: obj.buttonLabel, color: obj.buttonColor }} />
                                        </div> );
                                case 'MI_SERVICES':
                                    return <Hobbies key={i} payLoad={obj} />;
                                default :
                                    return '';
                            }
                        })}
                        {/* <div className="w3-container w3-margin">
                            <PriceCard data={{ heading: micsData.report[7].title, text: micsData.report[7].subTitle, price: micsData.report[7].buttonLabel, color: micsData.report[7].buttonColor }} />
                        </div> */}

                        <div className="w3-container w3-light-grey w3-text-gray " style={{ margin: '1em', borderRadius: '25px', padding: '1em 8px 0 8px' }}>
                            <div className=" w3-container w3-margin-top w3-margin-bottom">
                                <span style={{ marginBottom: '0', paddingBottom: '10px', borderBottom: '1px solid lightgrey' }}>
                                    <b>Next Steps</b>
                                </span>
                                <p>1.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas facilis nesciunt.</p>
                                <p>2.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas facilis nesciunt.</p>
                            </div>
                        </div>
                        <div className="w3-container w3-margin">
                            <PriceCard data={{ heading: micsData.report[7].title, text: micsData.report[7].subTitle, price: micsData.report[7].buttonLabel, color: micsData.report[7].buttonColor }} />
                        </div>
                        <div className="w3-container">
                            <Link to="/dashboard"><p className="w3-center w3-text-grey" style={{ margin: 0 }}>Go to dashboard</p></Link>
                        </div>
                        {/* <Chart/> */}
                    </div>
                </>
            ) : (
                    <div key={0} className="w3-center w3-margin w3-xlarge">
                        Loading...
        </div>
                )}
        </div>
    );
}

export default MICSReport;
