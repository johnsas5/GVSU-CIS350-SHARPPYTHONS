import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function SignUp({isOpen, onClose}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault()
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        onClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    }

  if (!isOpen) return (null);
  return (
    <section className="hero">
      <div className="text-area">
        <div className="text-box-log">
          <p className="login-text">
            <strong>Open Account</strong>
          </p>
          <div className="username">
            <input
              type="text"
              placeholder="Choose a Username"
              className="usernamefield"
              id="usernamefield1"
              value={email}
              onChange={(v) => setEmail(v.target.value)}
            />
            <img
              className="usericon"
              src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              alt="User Icon"
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Choose a Password"
              className="passwordfield"
              id="passwordfield1"
              value={password}
              onChange={(v) => setPassword(v.target.value)}
            />
            <img
              className="lock"
              src="https://icons.veryicon.com/png/o/miscellaneous/conventional-use/password-lock-12.png"
              alt="Your password is always protected!"
            />
            <button className="submit" id="submit1" onClick={onSubmit}>
              <strong>Submit</strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;