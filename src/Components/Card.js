import Submit from './Submit.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../src/logo.svg';
import Illustration from '../../src/illustration-dashboard.png';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={Logo} className={classes.logo} />
      <h1>We are launching </h1>
      <h2>soon!</h2>
      <p className={classes.subs}>Subscribe and get notified</p>
      <Submit />
      <img src={Illustration} className={classes.illustration} />
      <FontAwesomeIcon icon={faFacebookF} className={classes.iconFacebook} />
      <FontAwesomeIcon icon={faTwitter} className={classes.iconTwitter} />
      <FontAwesomeIcon icon={faInstagram} className={classes.iconInstagram} />
      <p className={classes.copyright}>&copy; Copyright Ping. All rights reserved.</p>
    </div>
  );
};

export default Card;
