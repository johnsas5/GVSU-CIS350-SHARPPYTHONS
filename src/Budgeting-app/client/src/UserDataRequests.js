import axios from 'axios';

export const GetUserData = (user) => {
  try {
    user.getIdToken(true).then(async (idToken) => {
      await axios
        .get("/FinancialData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + idToken,
          },
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return JSON.stringify(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          return null;
        });
    });
  } catch (err) {
    console.log(err);
    return null;
  };
}

export const PostUserData = (user, data) => {
  try {
    user.getIdToken(true).then(async (idToken) => {
      await axios
        .post("/FinancialData", JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + idToken,
          },
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            console.log("Data Submitted", data);
          } else {
            console.log("Error Occured");
          }
          return response.status;
        })
        .catch((error) => {
          console.error("Error posting user data: ", error);
        });
    });
  } catch (err) {
    console.log(err);
    return;
  }
}

export const GetRetirementData = (user) => {
  try {
    user.getIdToken(true).then(async (idToken) => {
      await axios
        .get("/RetirementData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + idToken,
          },
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return JSON.stringify(response.json);
          }
        })
        .catch((error) => {
          console.log(error);
          return null;
        });
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const GetFinanceAdvice = (user) => {
  try {
    user.getIdToken(true).then(async (idToken) => {
      await axios
        .get("/FinanceAdvice", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + idToken,
          },
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return JSON.stringify(response.json);
          }
        })
        .catch((error) => {
          console.log(error);
          return null;
        });
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};