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
            console.log("userData: " + typeof(uData));
            setUserData(JSON.parse(uData));
          } else {
            console.log("no user data retrieved");
          }
        }
        gud();
        async function grd() {
          var userRetireData = await GetRetirementData(currentUser);
          if (userRetireData != null) {
            setRetirementData(JSON.parse(userRetireData));
            console.log("retiredata from S: " + typeof(userRetireData));
          } else {
            console.log("no retirement data retriieved");
          }
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
  }, []);

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

  if (userData == null || retirementData == null || financeAdvice == null) {
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
          <div className="namebox">
            <p className="namet">
              <b>{userData.lastName}, {userData.firstName}</b>
            </p>
          </div>
          <h4 className="balance">Account Balance:</h4>
          <div className="balancebox">
            <p className="currbalt">
              <b>${userData.cur_savings}</b>
            </p>
          </div>
          <h4 className="agetextasum">Account Holder Age:</h4>
          <div className="agebox">
            <p className="curraget">
              <b>{userData.age}</b>
            </p>
          </div>
          <h4 className="dagetextasum">Desired Retirement Age:</h4>
          <div className="dagebox">
            <p className="daget">
              <b>year: {userData.retirement_year}</b>
            </p>
          </div>
          <h3 className="tmbd">Advice</h3>
          <div className="tmbdcont"> <p className="tmbdtext"><b>{financeAdvice}</b></p></div>
        </div>
        <div className="graphcontainer">
          <h2 className="graphText">Savings Graph</h2>
          <div className="graphspace">
            <SavingsGraph dataIn={userData} />
          </div>
        </div>
        <div className="graphcontainer">
          <h2 className="graphText">Retirement Graph</h2>
          <div className="graphspace">
            <RetirementGraph dataIn={retirementData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;