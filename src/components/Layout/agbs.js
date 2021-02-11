import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Geschäftsbedingungen from '../sections/info/agb';

const AGB = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Geschäftsbedingungen />
      </main>
      <Footer />
    </Fragment>
  );
};

export default AGB;
