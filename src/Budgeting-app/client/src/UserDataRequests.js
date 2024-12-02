import axios from 'axios';

export const GetUserData = (user) => {
  try {
    user.getIdToken(true).then((idToken) => {
      axios
        .get("/FinancialData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + idToken,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            return response.data;
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
    user.getIdToken(true).then((idToken) => {
      axios
        .post("/FinancialData", JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + idToken,
          },
        })
        .then((response) => {
          if (response.status === 200) {
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