import Login from "./Login";
import SignUp from "./SignUp";

function Home() {

  const loginClick = () => {
    Login();
  }

  const signUpClick = () => {
    SignUp();
  }

  return (
    <div>
      <section>
        <button 
          onClick={signUpClick}
          className="open-account">
          Sign Up
        </button>
        <button 
          onClick={loginClick}
          className="log-in">
          Log In
        </button>
        <button className="help">Help</button>
      </section>
    </div>
  );
}

export default Home;