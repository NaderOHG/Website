import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Contact from './Contact/Contact';
import Popup from '../../Cookie';

const sections = () => {
  return (
    <Fragment>
      <Popup />
      <Home />
      <About />
      <Service />
      <Facts />
      <Contact />
    </Fragment>
  );
};

export default sections;
