import { GetUserData, PostUserData, GetFinanceAdvice } from "../src/Budgeting-app/client/src/UserDataRequests";
import { auth } from "../src/Budgeting-app/client/src/firebase";

const UserData = {
    firstName: "First",
    lastName: "Last",
    age: 25,
    retirement_year: 2060,
    income: 900,
    expenses: 800,
    housing: 80,
    utilities: 90,
    transportation: 40,
    food: 60,
    debt_repayment: 78,
    insurance: 82,
    health_and_wealth: 49,
    entertainment: 67,
    education: 12,
    investments: 61,
    family_expenses: 71,
    other: 66,
    cur_savings: 244
  }

describe(IntegrationTests, () => {
    var userCred = async () => {
      return await signInWithEmailAndPassword(auth, "test@test.com", "testtest")
    }
    var currentUser = userCred.user;
    it("Posting user data returns success", () => {
      var postResponse = async () => {
        return await PostUserData(currentUser, UserData);
      }
      expect(postResponse).assertions(200);
    });

    it("Get user data returns previously posted data", () => {
      var GetReponse = async () => {
        return await GetUserData(currentUser);
      };
      expect(GetReponse).toMatchObject(UserData);
    });

    it("Finance advice is something", () => {
      var GetResponseAdvice = async () => {
        return await GetFinanceAdvice(currentUser);
      }
      expect(GetResponseAdvice).anything();
    });
});