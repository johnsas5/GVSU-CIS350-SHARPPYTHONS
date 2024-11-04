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

      </div>
    )

  }

  if (data == null) {
    return <h1>Error retreiving data</h1>
  }
  return <h1>This page lets users edit financial data</h1>;
};

export default FinancialData;