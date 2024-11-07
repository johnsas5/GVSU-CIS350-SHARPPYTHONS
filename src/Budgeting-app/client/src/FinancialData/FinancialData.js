import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import { UserData } from '../types'
import "../App.css";
import "../index.css";


function FinancialData() {
  const [userData, setUserData] = useState(new UserData());
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      axios.get("http://localhost:5000/FinancialData", {
        headers: { 
          'Authorization': 'Bearer ' + getAuth().currentUser.idToken
        }
      }).then( response => {
        if (response.status === 200){
          setUserData(response.data);
        } else {
          console.log("Response code/error: " + response.status + " " + response.error);
        }
      }).catch(error => {
        console.log(error);
      });
    } 

    getUserData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the endpoint
    axios.post('http://localhost:5000/FinancialData', userData, {
      headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuth().currentUser.idToken
      }
    })
    .then((response) => {
      if (response.status === 200) {
        console.log('Data Submitted', userData);
        // Move the user to the account summary page
        navigate('/Summary');
        } else {
        console.log('Error Occured');
      }
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
  }

  if (userData === null) {
    navigate("/Summary");
  } else {
    return (
      <div>
        <section className='options'>
          <button onClick={() => window.location.href = 'index.html'} classname="home">Home</button>
          {/* This will eventually need an onClick too but we have not made the help page yet */}
          <button className='help'>Help</button>
        </section>
        <div className='formbackground'></div>
        <div className='form' id='form'>
          <h2 className='formheader'>Financial Form</h2>
          <h3 className='prefname'>Preferred Name</h3>
        </div>
        <div>
          <input
            className='firstnamebox'
            type='text'
            placeholder='First Name'
            id='firstname1'
            value={userData.firstName}
            onChange={(v) => setUserData({...userData, firstName: v.target.value})}
          />
        </div>
        <div>
          <input
            className='lastnamebox'
            type='text'
            placeholder='Last Name'
            id='lastname1'
            value={userData.lastName}
            onChange={(v) => setUserData({...userData, lastName: v.target.value})}
          />
        </div>
        <h3 className='findata'>Financial Data</h3>
        <div>
          <input
            className='monthin'
            type='number'
            placeholder='Total Monthly Income'
            id='totin'
            value={userData.monthlyIncome}
            onChange={(v) => setUserData({...userData, monthlyIncome: v.target.value})}
          />
        </div>
        <div>
          <input
            className='monthex'
            type='number'
            placeholder='Total Monthly Expenses'
            id='monthlyExpenses'
            value={userData.monthlyExpenses}
            onChange={(v) => setUserData({...userData, monthlyExpenses: v.target.value})}
          />
        </div>
        <h3 className='breakdown'>Expense Breakdown</h3>
        <div>
          <input
            className='housing'
            type='number'
            placeholder='Housing'
            id='housing1'
            value={userData.housing}
            onChange={(v) => setUserData({...userData, housing: v.target.value})}
          />
        </div>
        <div>
          <input
            className='utilities'
            type='number'
            placeholder='Utilities'
            id='utilities1'
            value={userData.utilities}
            onChange={(v) => setUserData({...userData, utilities: v.target.value})}
          />
        </div>
        <div>
          <input
            className='transportation'
            type='number'
            placeholder='Transportation'
            id='transportation1'
            value={userData.transportation}
            onChange={(v) => setUserData({...userData, transportation: v.target.value})}
          />
        </div>
        <div>
          <input
            className='food'
            type='number'
            placeholder='Food'
            value={userData.utilities}
            onChange={(v) => setUserData({...userData, utilities: v.target.value})}
          />
        </div>
        <div>
          <input
            className='debtrepayment'
            type='number'
            placeholder='Debtrepayment'
            id='debtrepayment1'
            value={userData.debtRepayment}
            onChange={(v) => setUserData({...userData, debtRepaytment: v.target.value})}
          />
        </div>
        <div>
          <input
            className='insurnace'
            type='number'
            placeholder='Insurance'
            id='insurance1'
            value={userData.insurance}
            onChange={(v) => setUserData({...userData, insurance: v.target.value})}
          />
        </div>
        <div>
          <input
            className='health'
            type='number'
            placeholder='Health'
            id='health1'
            value={userData.health}
            onChange={(v) => setUserData({...userData, health: v.target.value})}
          />
        </div>
        <div>
          <input
            className='entertainment'
            type='number'
            placeholder='Entertainment'
            id='entertainment1'
            value={userData.entertainment}
            onChange={(v) => setUserData({...userData, entertainment: v.target.value})}
          />
        </div>
        <div>
          <input
            className='education'
            type='number'
            placeholder='Education'
            id='education1'
            value={userData.education}
            onChange={(v) => setUserData({...userData, education: v.target.value})}
          />
        </div>
        <div>
          <input
            className='investments'
            type='number'
            placeholder='Investments'
            id='investments1'
            value={userData.investments}
            onChange={(v) => setUserData({...userData, investments: v.target.value})}
          />
        </div>
        <div>
          <input
            className='family'
            type='number'
            placeholder='Family Expenses'
            id='familyexpenses1'
            value={userData.familyExpenses}
            onChange={(v) => setUserData({...userData, familyExpenses: v.target.value})}
          />
        </div>
        <div>
          <input
            className='other'
            type='number'
            placeholder='Other'
            id='other1'
            value={userData.other}
            onChange={(v) => setUserData({...userData, other: v.target.value})}
          />
        </div>
        <h3 className='pinfo'>Personal Related Information</h3>
        <div>
          <input
            className='curage'
            type='number'
            placeholder='Current Age'
            id='cage1'
            value={userData.currentAge}
            onChange={(v) => setUserData({...userData, currentAge: v.target.value})}
          />
        </div>
        <div>
          <input
            className='retage'
            type='number'
            placeholder='Desired Retirement Age'
            id='rage1'
            value={userData.retirementAge}
            onChange={(v) => setUserData({...userData, retirementAge: v.target.value})}
          />
        </div>
        <button
          type='button'
          className='submitform'
          id='submitform1'
          onClick={onSubmit}
        >
          <span className='subtext' id='subtext'><strong>Submit</strong></span>
        </button>
      </div>
    );
  }
}

export default FinancialData;