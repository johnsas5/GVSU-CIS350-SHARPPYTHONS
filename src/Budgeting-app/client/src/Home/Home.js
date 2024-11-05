import React, {useState} from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import "../App.css";
import "../index.css";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const onClickLogin = () => {
    setShowSignUp(false);
    setShowLogin(!showLogin);
  }
  const onClickSignUp = () => {
    setShowLogin(false);
    setShowSignUp(!showSignUp);
  }

  return (
    <div>
      <section>
        <button 
          onClick={onClickLogin}
          className="open-account">
          Sign Up
        </button>
        <button 
          onClick={onClickSignUp}
          className="log-in">
          Log In
        </button>
        <button className="help">Help</button>
      </section>
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignUp isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </div>
  );
}

export default Home;