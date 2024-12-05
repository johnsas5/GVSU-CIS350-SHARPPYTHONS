import axios from 'axios';

const GetUserData = async (user) => {
  try {
    var tok = await GetUserToken(user);
    var response = await axios.get("/FinancialData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tok,
          },
        });
    if (response.status >= 200 && response.status < 300) {
      console.log("response data: " + response.data);
      return response.data;
    }
    else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  };
}

const PostUserData = async (user, data) => {
  try {
    var tok = await GetUserToken(user);
    var response = await axios.post("/FinancialData", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tok,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      console.log("Data Submitted", data);
    } else {
      console.log("Error Occured");
    }
    return response.status;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const GetRetirementData = async (user) => {
  try {
    var tok = await GetUserToken(user);
    var response = await axios.get("/RetirementData", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tok,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const GetFinanceAdvice = async (user) => {
  try {
    var tok = await GetUserToken(user);
    var response = await axios.get("/FinanceAdvice", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tok,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const GetUserToken = async (user) =>{
  var token = await user.getIdToken(true);
  return token;
}

export { GetUserData, PostUserData, GetRetirementData, GetFinanceAdvice };