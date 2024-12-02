import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserData, PostUserData } from "../UserDataRequests";
import { UserData } from "../types";
import { useAuthValue } from "../AuthContext";

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
        console.log("user logged in");
      }
      
      console.log("user FD 22: " + JSON.stringify(currentUser));
      const data = GetUserData(currentUser);
      if (data) {
        navigate("/Summary");
      } else {
        setUserData(UserData);
      }
    }
    catch (err) {
      console.log(err);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the endpoint
    console.log("user FD 39: " + JSON.stringify(currentUser));
    console.log("user data 40: " + JSON.stringify(userData));
    var response = PostUserData(currentUser, userData);
    if (response === 200) {
      navigate("/Summary");
    }
  };

  return (
    <div>
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
            onChange={(v) => setUserData({ ...userData, food: v.target.value })}
          />
        </div>
        <div>
          <input
            className="debtrepayment"
            type="number"
            placeholder="Debtrepayment"
            id="debtrepayment1"
            onChange={(v) =>
              setUserData({ ...userData, debt_repaytment: v.target.value })
            }
          />
        </div>
        <div>
          <input
            className="insurnace"
            type="number"
            placeholder="Insurance"
            id="insurance1"
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
