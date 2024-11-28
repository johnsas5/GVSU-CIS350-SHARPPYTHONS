import React, { useState, useEffect } from 'react';
import { GetUserData } from '../UserDataRequests';
import RetirementGraph from './RetirementGraph';
import SavingsGraph from './SavingsGraph';
//import { useAuthValue } from '../AuthContext';


function Summary() {
  //const {currentUser} = useAuthValue()
  const {data, setData} = useState(null);

  useEffect(() => {
    const userData = GetUserData();
    if (userData !== null) {
      setData(userData);
    }
    else {
      console.log("no user data retrieved");
    }
  }, []);

  if (data === null) {
    return (<h1>No user data retreived</h1>)
  }
  return (
    <div>
      <div className="asumBackground"></div>
      <div className="twoc">
        <div className="accountSummary">
          <h2 className="asumText">Account Summary</h2>
          <h4 className="aholdername">Account Holder Name:</h4>
          <h4 className="balance">Account Balance:</h4>
          <h4 className="agetextasum">Account Holder Age:</h4>
          <h4 className="dagetextasum">Desired Retirement Age:</h4>
          <h3 className="tmbd">This Month's Breakdown</h3>
          <div className="tmbdcont"></div>
        </div>
        <div className="graphcontainer">
          <h2 className="graphText">Savings Graph</h2>
          <div className="graphspace">
            <SavingsGraph />
          </div>
        </div>
        <div className="graphcontainer">
          <h2 className="graphText">Retirement Graph</h2>
          <div className="graphspace">
            <RetirementGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;