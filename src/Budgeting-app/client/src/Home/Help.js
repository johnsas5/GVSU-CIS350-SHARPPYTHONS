import React from 'react';
import { useNavigate } from "react-router-dom";

function Help() {
    const navigate = useNavigate();

    const movehome = () => {
      navigate("/");
    }

    return (
      <div>
        <section>
          <button onClick={movehome} className="navButtons">
            Home
          </button>
        </section>
        <div className="formbackground"></div>
        <div className="helptextbox">
          <h1>Account Set Up</h1>
          <p className="howto">
            Begin by opening an account. Once you have opened your account fill
            out the financial form. Finally proceed to the account summary for
            personalized suggestions and visual representations of your
            finances.
          </p>
        </div>
      </div>
    );
}

export default Help;