import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom"


function FinancialData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        axios.get("/FinancialData", {
          headers: { 
            'Authorization': 'Bearer ' + getAuth().currentUser.idToken
          }
        }).then( response => {
          if (response.status === 200){
            setData(response.data);
          }
        }).catch(error => {
          console.log(error);
        });
      } catch (err) {
        console.log(err);
      };
    } 

    getUserData();
  }, []);

  function FinancialForm() {
    const navigate = useNavigate();
    // Making variables for each input field
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [housing, setHousing] = useState('');
    const [utilities, setUtilities] = useState('');
    const [transportation, setTransportation] = useState('');
    const [food, setFood] = useState('');
    const [debtRepayment, setDebtRepayment] = useState('');
    const [insurance, setInsurance] = useState('');
    const [health, setHealth] = useState('');
    const [entertainment, setEntertainment] = useState('');
    const [education, setEducation] = useState('');
    const [investments, setInvestments] = useState('');
    const [familyExpenses, setFamilyExpenses] = useState('');
    const [other, setOther] = useState('');
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');

    const onSubmit = (e) => {
      e.preventDefault();
      const formData = {
        firstName,
        lastName,
        monthlyIncome,
        monthlyExpenses,
        housing,
        utilities,
        transportation,
        food,
        debtRepayment,
        insurance,
        health,
        entertainment,
        education,
        investments,
        familyExpenses,
        other,
        currentAge,
        retirementAge
      };

      // Send a POST request to the endpoint
      axios.post('/FinancialData', formData)
      .then((response) => {
        if (response.status === 200) {
          console.log('Data Submitted', formData);
        // Move the user to the account summary page
        navigate('/Summary');
        } else {
        console.log('Error Occured');
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
    };

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
            value={firstName}
            onChange={(value) => setFirstName(v.target.value)}
          />
        </div>
        <div>
          <input
            className='lastnamebox'
            type='text'
            placeholder='Last Name'
            id='lastname1'
            value={lastName}
            onChange={(value) => setLastName(v.target.value)}
          />
        </div>
        <h3 className='findata'>Financial Data</h3>
        <div>
          <input
            className='monthin'
            type='number'
            placeholder='Total Monthly Income'
            id='totin'
            value={monthlyIncome}
            onChange={(value) => setMonthlyIncome(v.target.value)}
          />
        </div>
        <div>
          <input
            className='monthex'
            type='number'
            placeholder='Total Monthly Expenses'
            id='monthlyExpenses'
            value={monthlyExpenses}
            onChange={(value) => setMonthlyExpenses(v.target.value)}
          />
        </div>
        <h3 className='breakdown'>Expense Breakdown</h3>
        <div>
          <input
            className='housing'
            type='number'
            placeholder='Housing'
            id='housing1'
            value={housing}
            onChange={(value) => setMonthlyExpenses(v.target.value)}
          />
        </div>
        <div>
          <input
            className='utilities'
            type='number'
            placeholder='Utilities'
            id='utilities1'
            value={utilities}
            onChange={(value) => setUtilities(v.target.value)}
          />
        </div>
        <div>
          <input
            className='transportation'
            type='number'
            placeholder='Transportation'
            id='transportation1'
            value={transportation}
            onChange={(value) => setTransportation(v.target.value)}
          />
        </div>
        <div>
          <input
            className='food'
            type='number'
            placeholder='Food'
            value={utilities}
            onChange={(value) => setFood(v.target.value)}
          />
        </div>
        <div>
          <input
            className='debtrepayment'
            type='number'
            placeholder='Debtrepayment'
            id='debtrepayment1'
            value={debtRepayment}
            onChange={(value) => setDebtRepayment(v.target.value)}
          />
        </div>
        <div>
          <input
            className='insurnace'
            type='number'
            placeholder='Insurance'
            id='insurance1'
            value={insurance}
            onChange={(value) => setInsurance(v.target.value)}
          />
        </div>
        <div>
          <input
            className='health'
            type='number'
            placeholder='Health'
            id='health1'
            value={health}
            onChange={(value) => setHealth(v.target.value)}
          />
        </div>
        <div>
          <input
            className='entertainment'
            type='number'
            placeholder='Entertainment'
            id='entertainment1'
            value={entertainment}
            onChange={(value) => setEntertainment(v.target.value)}
          />
        </div>
        <div>
          <input
            className='education'
            type='number'
            placeholder='Education'
            id='education1'
            value={education}
            onChange={(value) => setEducation(v.target.value)}
          />
        </div>
        <div>
          <input
            className='investments'
            type='number'
            placeholder='Investments'
            id='investments1'
            value={investments}
            onChange={(value) => setInvestments(v.target.value)}
          />
        </div>
        <div>
          <input
            className='family'
            type='number'
            placeholder='Family Expenses'
            id='familyexpenses1'
            value={familyExpenses}
            onChange={(value) => setFamilyExpenses(v.target.value)}
          />
        </div>
        <div>
          <input
            className='other'
            type='number'
            placeholder='Other'
            id='other1'
            value={other}
            onChange={(value) => setOther(v.target.value)}
          />
        </div>
        <h3 className='pinfo'>Personal Related Information</h3>
        <div>
          <input
            className='curage'
            type='number'
            placeholder='Current Age'
            id='cage1'
            value={currentAge}
            onChange={(value) => setCurrentAge(v.target.value)}
          />
        </div>
        <div>
          <input
            className='retage'
            type='number'
            placeholder='Desired Retirement Age'
            id='rage1'
            value={retirementAge}
            onChange={(value) => setRetirementAge(v.target.value)}
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

  if (data == null) {
    return <h1>Error retreiving data</h1>
  }
  return <h1>This page lets users edit financial data</h1>;
};

export default FinancialData;