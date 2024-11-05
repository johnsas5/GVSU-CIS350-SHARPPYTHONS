import { getAuth } from 'firebase/auth';
import axios from 'axios';

export function GetUserData() {
  try {
    axios.get("/FinancialData", {
      headers: { 
        'Authorization': 'Bearer ' + getAuth().currentUser.idToken
      }
    }).then( response => {
      if (response.status === 200){
        return response.data;
      }
    }).catch(error => {
      console.log(error);
      return null;
    });
  } catch (err) {
    console.log(err);
    return null;
  };
}
