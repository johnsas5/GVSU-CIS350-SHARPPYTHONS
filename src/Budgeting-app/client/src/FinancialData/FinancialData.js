import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

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

  if (data == null) {
    return <h1>Error retreiving data</h1>
  }
  return <h1>This page lets users edit financial data</h1>;
};

export default FinancialData;