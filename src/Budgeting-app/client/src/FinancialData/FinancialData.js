import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserData, PostUserData } from "../UserDataRequests";
import { UserData } from "../types";
import { useAuthValue } from "../AuthContext";
import { getAuth, signOut } from "firebase/auth";

function FinancialData() {
  const { currentUser } = useAuthValue();
  const [userData, setUserData] = useState(UserData);
  const navigate = useNavigate();

  useEffect(() => {
    try{
      if (currentUser == null) {
        console.log("user is null");
        navigate("/");
      }
      else {
        console.log("user logged in: " + currentUser);
        async function gud() {
          var uData = await GetUserData(currentUser)
          setUserData(uData);
          console.log("FD data: " + uData);
        }
        gud();
      }
    }
    catch (err) {
      console.log(err);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the endpoint
    async function pud() {
      var response = await PostUserData(currentUser, userData)
      console.log("Post response: " + response);
      if (response >= 200 && response < 300) {
        console.log("Post Success: " + response);
        navigate("/Summary");
      }
    }
    pud();
  };

  const onClickSignOut = (e) => {
    e.preventDefault();
    const auth = getAuth();
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
  }
  const onClickSummary = (e) => {
    e.preventDefault();
    if (currentUser != null) {
      navigate("/Summary");
    }
  }

  return (
    <div>
      <section>
        <button onClick={onClickSignOut} className="navButtons">
          Sign Out
        </button>
        <button onClick={onClickSummary} className="navButtons">
          Summary
        </button>
      </section>
      <div className="formbackground"></div>
      <div className="form" id="form">
        <h2 className="formheader">Financial Form</h2>
        <h3 className="prefname">Preferred Name</h3>
        <div>
          <input
            className="firstnamebox"
            type="text"
            placeholder="First Name"
            id="firstname1"
            value={(userData != null) ? userData.firstName : ""}
            onChange={(v) =>
              setUserData({ ...userData, firstName: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="lastnamebox"
            type="text"
            placeholder="Last Name"
            id="lastname1"
            value={(userData != null) ? userData.lastName : ""}
            onChange={(v) =>
              setUserData({ ...userData, lastName: v.target.value })
            }
          />
        </div>
        <h3 className="findata">Financial Data</h3>
        <div>
          <input
            className="monthin"
            type="number"
            placeholder="Total Monthly Income"
            id="totin"
            value={(userData != null && userData.income > 0) ? userData.income : ""}
            onChange={(v) =>
              setUserData({ ...userData, income: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="monthex"
            type="number"
            placeholder="Total Monthly expenses"
            id="totex"
            value={(userData != null && userData.expenses > 0) ? userData.expenses : ""}
            onChange={(v) =>
              setUserData({ ...userData, expenses: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="currsav"
            type="number"
            placeholder="Current Savings"
            id="currentSavings"
            value={(userData != null && userData.cur_savings > 0) ? userData.cur_savings : ""}
            onChange={(v) =>
              setUserData({ ...userData, cur_savings: v.target.value })
            }
          />
        </div>
        <h3 className="breakdown">Expense Breakdown</h3>
        <div>
          <input
            className="housing"
            type="number"
            placeholder="Housing"
            id="housing1"
            value={(userData != null && userData.housing > 0) ? userData.housing : ""}
            onChange={(v) =>
              setUserData({ ...userData, housing: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="utilities"
            type="number"
            placeholder="Utilities"
            id="utilities1"
            value={(userData != null && userData.utilities > 0) ? userData.utilities : ""}
            onChange={(v) =>
              setUserData({ ...userData, utilities: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="transportation"
            type="number"
            placeholder="Transportation"
            id="transportation1"
            value={(userData != null && userData.transportation > 0) ? userData.transportation : ""}
            onChange={(v) =>
              setUserData({ ...userData, transportation: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="food"
            type="number"
            placeholder="Food"
            id="food"
            value={(userData != null && userData.food > 0) ? userData.food : ""}
            onChange={(v) => setUserData({ ...userData, food: v.target.value })}
          />
        </div>
        <div>
          <input
            className="debtrepayment"
            type="number"
            placeholder="Debtrepayment"
            id="debtrepayment1"
            value={(userData != null && userData.debt_repayment > 0) ? userData.debt_repaytment : ""}
            onChange={(v) =>
              setUserData({ ...userData, debt_repayment: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="insurance"
            type="number"
            placeholder="Insurance"
            id="insurance1"
            value={(userData != null && userData.insurance > 0) ? userData.insurance : ""}
            onChange={(v) =>
              setUserData({ ...userData, insurance: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="health"
            type="number"
            placeholder="Health"
            id="health1"
            value={(userData != null && userData.health_and_wealth > 0) ? userData.health_and_wealth : ""}
            onChange={(v) =>
              setUserData({ ...userData, health_and_wealth: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="entertainment"
            type="number"
            placeholder="Entertainment"
            id="entertainment1"
            value={(userData != null && userData.entertainment > 0) ? userData.entertainment : ""}
            onChange={(v) =>
              setUserData({ ...userData, entertainment: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="education"
            type="number"
            placeholder="Education"
            id="education1"
            value={(userData != null && userData.education > 0) ? userData.education : ""}
            onChange={(v) =>
              setUserData({ ...userData, education: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="investments"
            type="number"
            placeholder="Investments"
            id="investments1"
            value={(userData != null && userData.investments > 0) ? userData.investments : ""}
            onChange={(v) =>
              setUserData({ ...userData, investments: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="family"
            type="number"
            placeholder="Family Expenses"
            id="familyexpenses1"
            value={(userData != null && userData.family_expenses > 0) ? userData.family_expenses : ""}
            onChange={(v) =>
              setUserData({ ...userData, family_expenses: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="other"
            type="number"
            placeholder="Other"
            id="other1"
            value={(userData != null && userData.other > 0) ? userData.other : ""}
            onChange={(v) =>
              setUserData({ ...userData, other: v.target.value })
            }
          />
        </div>
        <h3 className="pinfo">Personal Related Information</h3>
        <div>
          <input
            className="curage"
            type="number"
            placeholder="Current Age"
            id="cage1"
            value={(userData != null && userData.age > 0) ? userData.age : ""}
            onChange={(v) =>
              setUserData({ ...userData, age: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="retage"
            type="number"
            placeholder="Desired Retirement year"
            id="rage1"
            value={(userData != null && userData.retirement_year > 0) ? userData.retirement_year : ""}
            onChange={(v) =>
              setUserData({ ...userData, retirement_year: v.target.value })
            }
          />
        </div>
        <button
          type="button"
          className="submitform"
          id="submitform1"
          onClick={onSubmit}
        >
          <span className="subtext" id="subtext">
            <strong>Submit</strong>
          </span>
        </button>
      </div>
    </div>
  );
}

export default FinancialData;
