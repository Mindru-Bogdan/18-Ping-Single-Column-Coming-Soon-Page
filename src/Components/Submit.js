import classes from './Submit.module.css';

const Submit = () => {
  return (
    <div>
      <input type="text" placeholder="Your email address..."></input>
      <p className={classes.button}>Notify Me</p>
    </div>
  );
};

export default Submit;
