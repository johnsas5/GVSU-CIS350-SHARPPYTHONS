import React, { useState, useEffect } from 'react';
import { GetUserData, GetFinanceAdvice, GetRetirementData } from '../UserDataRequests';
import RetirementGraph from './RetirementGraph';
import SavingsGraph from './SavingsGraph';
import { useAuthValue } from '../AuthContext';
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Summary() {
  const { currentUser } = useAuthValue();
  const [userData, setUserData] = useState(null);
  const [retirementData, setRetirementData] = useState(null);
  const [financeAdvice, setFinanceAdvice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (currentUser != null) {
        console.log("current user S: " + currentUser);
        async function gud() {
          var uData = await GetUserData(currentUser)
          if (uData != null) {
            console.log("userData: " + uData);
            setUserData(uData);
          } else {
            console.log("no user data retrieved");
          }
        }
        gud();
        async function grd() {
          var userRetireData = await GetRetirementData(currentUser);
          if (userRetireData != null) {
            setRetirementData(userRetireData);
            console.log("retiredata: " + userRetireData);
          } else {
            console.log("no retirement data retriieved");
          }
          console.log("retire data: " + retirementData);
        }
        grd();
        async function gfa() {
          var userAdvice = await GetFinanceAdvice(currentUser);
          if (userAdvice != null) {
            setFinanceAdvice(userAdvice);
            console.log("advice: " + userAdvice);
          } else {
            console.log("no finance advice retrieved");
          }
        }
        gfa();
      }
      else {
        console.log("User is null");
      }
    } catch (err) {
      console.log(err);
    }
  }, [currentUser]);

  const onClickSignOut = (e) => {
    e.preventDefault();
    const auth = getAuth();
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
  }
  const onClickFinancialData = (e) => {
    e.preventDefault();
    if (currentUser != null) {
      navigate("/FinancialData");
    }
  }

  if (userData === null) {
    return (<h1>No user data retreived</h1>)
  }
  return (
    <div>
      <section>
        <button onClick={onClickSignOut} className="navButtons">
          Sign Out
        </button>
        <button onClick={onClickFinancialData} className="navButtons">
          Change Finances
        </button>
      </section>
      <div className="asumBackground"></div>
      <div className="twoc">
        <div className="accountSummary">
          <h2 className="asumText">Account Summary</h2>
          <h4 className="aholdername">Account Holder Name:</h4>
          <h4 className="balance">Account Balance:</h4>
          <h4 className="agetextasum">Account Holder Age:</h4>
          <h4 className="dagetextasum">Desired Retirement Age:</h4>
          <h3 className="tmbd">This Month's Breakdown</h3>
          <div className="tmbdcont">
            <p>{financeAdvice}</p>
          </div>
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