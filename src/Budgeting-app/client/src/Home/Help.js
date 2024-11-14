import React, {useState} from 'react';

function moveopen() {
    const navigate = useNavigate();
    navigate("/Open-Account")
}

function movelog() {
    const navigate = useNavigate();
    navigate("/Login")
}

function movehome() {
    const navigate = useNavigate();
    navigate("/Home")
}

function Help() {
    return (
        <div>
            <div className="options">
            <button 
                onClick={moveopen}
                className="open-account">
                Open Account
            </button>
            <button
                onclick={movelog}
                className="login">
                Log In
            </button>
            <button
                onClick={movehome}
                className="home">
                Home
            </button>
            </div>
            <div className="formbackground">
            </div>
            <div className="helptextbox">
                <h1>Account Set Up</h1>
                <p className="howto">Begin by opening an account. Once you have opened your account fill out the financial form. Finally proceed to the account summary for personalized suggestions and visual representations of your finances.</p>
            </div>
        </div>
      );
}