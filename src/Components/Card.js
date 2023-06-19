import Submit from './Submit.js';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <h1>We are launching </h1>
      <h2>soon!</h2>
      <p>Subscribe and get notified</p>
      <Submit />
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </div>
  );
};

export default Card;
