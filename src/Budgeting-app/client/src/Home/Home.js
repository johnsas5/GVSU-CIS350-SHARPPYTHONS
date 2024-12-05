import React, {useState, useEffect} from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import { useAuthValue } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuthValue();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showWelcome, setWelcome] = useState(true);

  const onClickLogin = () => {
    setWelcome(false);
    setShowSignUp(false);
    setShowLogin(true);
  }
  const onClickSignUp = () => {
    setWelcome(false);
    setShowLogin(false);
    setShowSignUp(true);
  }

  const onClickHelp = () => {
    navigate("/Help");
  }

  useEffect(() => {
    if (currentUser != null){
      console.log("user not null");
      navigate("/FinancialData");
    }
  }, [currentUser]);

  return (
    <div>
      <section>
        <button onClick={onClickSignUp} className="navButtons">
          Sign Up
        </button>
        <button onClick={onClickLogin} className="navButtons">
          Log In
        </button>
        <button onClick={onClickHelp} className="navButtons">
          Help
        </button>
      </section>
      {showWelcome && (
        <div className="hero">
          <div className="text-area">
            <div className="text-box">
              <h1>Your Financial Planning Starts Here</h1>
            </div>
          </div>
        </div>
      )}
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignUp isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </div>
  );
}

export default Home;