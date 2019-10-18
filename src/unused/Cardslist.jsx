/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import fetchData  from '../components/fetchCall';
// import { Spring } from "react-spring/renderprops";
import '../index.css';
import { Card } from './Card.jsx';

const axios = require('axios');

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDdmOWVhNDcxZTU4MzJjYTIzODhhMyIsImlhdCI6MTU3MDE4MTg4OX0.poMhIOwDhkBfMt2S7QuhffHxTYTKlx67ge8tOXiFdrU";

const URL = 'http://192.168.1.106:3000/api/v2.1/child/5d9713180d29233f0251900d/genius/5d970592b64d2f6498d4c96c';

const postUrl = 'http://192.168.1.106:3000/api/v2.1/child/5d9713180d29233f0251900d/genius';

const assessmentId = "5d970592b64d2f6498d4c96c";

const CardsList = () => {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState('loading');
  const [PostData, setPostData] = useState([{ data: [], status: 'INIT' }]);
  const [progress, setProgress] = useState(0);
  const [assessment, setAssessment] = useState('continue');

  const sendResponse = async (Url, parameters) => {
    const result = { progress: [] };
    await axios({
      method: 'post',
      url: Url,
      data: parameters,
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': accessToken,
      },
    })
      .then((response) => {
        // ((response.progress).toFixed(0)==100) ? setStatus('Completed') : setStatus('SUCCESS')
        // setProgress((response.data.data.progress).toFixed(0));
        // setProgress(100);
        console.log('Progress:', (response.data.data.progress).toFixed(0));
        result.progress = (response.data.data.progress).toFixed(0);
        return result;
      }).catch((error) => {
        console.log('error :', error);
        result.status = 'ERROR: '+error;
        return result;
      });
    return result;
  };

  const handleClick = useCallback(async (res, questionId) => {
    
    const responseData = {
      geniusId: assessmentId, 
      questionId,
      response: res,
    };

    // console.log('user_response', {
    //   'assessmentId ': assessmentId,
    //   'questionId ': questionId,
    //   'user_response ': res,
    // });

    await sendResponse(postUrl, responseData).then((a) => {
      setProgress(a.progress);
      (a.progress !== 100) ? setIndex((state) => (state + 1)) : setStatus('Completed');
    });
  }, []);

  const getAssessment = async () => {
    const response = await fetchData(URL , accessToken);
    console.log(response)

    await setPostData(response.data.data.data.questions);
    setAssessment(response.data.data.data.questions.length);
    await setStatus(response.status);
  };

  useEffect(() => {
    getAssessment();
  }, []);

  const pages = PostData.map((card) => ({ style }) => (

    <animated.div style={{ ...style }}>
      
      <Card fun={handleClick} data={card}/>

    </animated.div>
  ));
  
  const transitions = useTransition((index), (p) => p, {
    from: { opacity: 0, marginTop: '100%', padding: '1em', },
    enter: { opacity: 1, marginTop: '20%', padding: '1em' },
    leave: { opacity: 0, marginTop: '-100%', padding: '1em' },
  });

  const nextTransition = useTransition((index), (p) => p, {
    from: { opacity: 0, marginTop: '100%', padding: '1em' },
    enter: { opacity: 0.3, marginTop: '10%', padding: '1em' },
    leave: { opacity: 0, marginTop: '-100%', padding: '1em' },
  });

  return (
    <div className="App">
      {(status === 'SUCCESS')
        ? (
          <div className="simple-trans-main">
            {/* {console.log(index)} */}
            { transitions.map(({ item, props, key }) => {
            if (item < pages.length) {
              // console.log(item,pages.length);
              const Page = pages[item];
              return (
              <div key={key}>
                <Page style={props}/>
              </div>);
            }
            return (<h1>Assessment Completed</h1>);
            // return (
            //   <Card
            //     key={key}
            //     style={props}
            //     fun={handleClick}
            //     data={{
            //       name: 'Assessment Completed',
            //       responseType: {
            //         displayOptions: [{ option: 'Next Assessment' }, { option: 'Go to Track' }, { option: 'Continue' }, { option: 'Exit' }],
            //       },
            //     }}
            //   />
            // );
          })}

            { nextTransition.map(({ item, props, key }) => {
              // console.log(item,pages.length);
              if (item < pages.length - 1) {
                const Page = pages[item + 1];
                return (<div key={key}><Page style={props} /></div>);
              }
              return '';
            })}
          </div>
        ) : (
          <div key={0} style={{ marginLeft: '200%', marginTop: '200%', fontSize: '2em' }}>
        Loading...
          </div>
        )}
    </div>
  );
};

export default CardsList;
