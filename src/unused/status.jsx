/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import fetchData from '../fetchCall.jsx';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTExOGYzZmJlNjI5MzE0OTc0Y2EwYiIsImlhdCI6MTU2NjYzOTkyN30.BOH7VjIdBgXL6riwgGGYFgVU9LVQaXGmLMgvWzVZ8ps';
const getStatusUrl = 'https://dev.mai.family/api/v1/child/5d5119befbe629314974ca0d/assessment/5ce28e5b990bef450f1fdfc9';

const Status = () => {
  const [response, setResponse] = useState({
    data: {
      data: {
        data: {
          description: 'description',
          displayStatus: 'CONTINUE',
          status: 'PENDING',
          progress: 0,
          images: [],
        },
      },
    },
  });

  const getAssessment = async () => {
    const result = await fetchData(getStatusUrl, accessToken);
    setResponse(result);
    // console.log(result)
    return result;
  };

  useEffect(() => {
    getAssessment();
  }, []);

  return (
    <div className="w3-container">
      {/* {console.log(response)} */}
      {/* <img src={response.data.data.data.images[0]} alt="Child" style={{ width: '100%', padding: '1em 0.2em' }} />
      <h3>Description</h3>
      <div className="w3-panel w3-card-4"><p>{response.data.data.data.description}</p></div>
      <div className="w3-container w3-card">
        <p className="w3-text-grey">STATUS</p>
        <p className="w3-text-orange">
          {response.data.data.data.status}
(
          {response.data.data.data.updatedAt}
)
        </p>
        <div className="w3-light-grey">
          <div id="myBar" className="w3-round-xlarge w3-container w3-blue" style={{ height: '20px', width: `${(response.data.data.data.progress).toFixed(0)}%` }} />
        </div>
        <button className="w3-button w3-text-blue w3-right" type="button">{response.data.data.data.displayStatus}</button>
      </div> */}
    </div>
  );
};

export default Status;
