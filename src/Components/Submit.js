import { useState } from 'react';

import classes from './Submit.module.css';

const Submit = () => {
  const [email, setEmail] = useState('');
  const [validity, setValidity] = useState(true);

  const emailSet = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const ValidityHandler = (event) => {
    if (!isEmailValid(email)) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        className={validity ? classes.normalInput : classes.errorInput}
        placeholder="Your email address..."
        onChange={emailSet}
      ></input>
      <p className={validity ? classes.hidden : classes.errorText}>Please provide a valid email address</p>
      <p className={classes.button} onClick={ValidityHandler}>
        Notify Me
      </p>
    </div>
  );
};

export default Submit;
