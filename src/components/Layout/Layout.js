import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Sections from '../sections/Sections';
import Datenschutz from '../sections/info/datenschutz';
import Widerruf from '../sections/info/Widerruf';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
      <Router>
          <Switch>
            <Route exact path="/" component={Sections} />
            <Route exact path="/Datenschutz" component={Datenschutz} />
            <Route exact path="/Widerruf" component={Widerruf} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
