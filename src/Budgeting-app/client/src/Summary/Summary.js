import React from 'react';
import { GetUserData } from '../UserDataRequests';
import { useEffect, useState } from 'react';
import RetirementGraph from './RetirementGraph';
import SavingsGraph from './SavingsGraph';
import { UserData } from '../types';

function Summary() {
  const [userData, setUserData] = useState(new UserData());

  useEffect(() => {
    const data = GetUserData();
    if (data != null) {
      return (<h1>No user data retreived</h1>)
    }
    else {
      setUserData(data);
    }
  }, []);

  return (
    <div>
      <section className="options">
        <button onclick="window.location.href='index.html';" className="home">Home</button>
        <button className="help">Help</button>
        <button className="signout">Sign Out</button>
        <button className="updateForm">Update Form</button>
      </section>
      <div className="asumBackground">
      </div>
      <div className="twoc">
        <div className="accountSummary">
            <h2 className="asumText">Account Summary</h2>
            <h4 className="aholdername">Account Holder Name:</h4>
            <h4 className="balance">Account Balance:</h4>
            <h4 className="agetextasum">Account Holder Age:</h4>
            <h4 className="dagetextasum">Desired Retirement Age:</h4>
            <h3 className="tmbd">This Month's Breakdown</h3>
            <div className="tmbdcont">
          </div>
      </div>
        <div className="graphcontainer">
            <h2 className="graphText">Retirement Graph</h2>
            <div className="graphspace">
              <RetirementGraph/>
            </div>
        </div>
        <div className="graphcontainer">
            <h2 className="graphText">Savings Graph</h2>
            <div className="graphspace">
              <SavingsGraph/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;