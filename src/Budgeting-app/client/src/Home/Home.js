import React, {useState} from 'react';
import Login from "./Login";
import SignUp from "./SignUp";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showWelcome, setWelcome] = useState(true);

  const onClickLogin = () => {
    setWelcome(false);
    setShowSignUp(false);
    setShowLogin(!showLogin);
  }
  const onClickSignUp = () => {
    setWelcome(false);
    setShowLogin(false);
    setShowSignUp(!showSignUp);
  }

  return (
    <div>
      <section>
        <button onClick={onClickLogin} className="open-account">
          Sign Up
        </button>
        <button onClick={onClickSignUp} className="log-in">
          Log In
        </button>
        <button className="help">Help</button>
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