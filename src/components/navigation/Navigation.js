import React from "react";
import './App.css';
import Widerruf from '../sections/Widerruf/Widerruf'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Navigation() {
    return (
        <Router >
         
          
                <div>

                    <Router>
                      <Switch>
                          <Link component={Widerruf} path="/widerruf" exact />
                      </Switch>
                    </Router>
                </div>
               

        </Router>


    );
}



const styles = {};

   styles.NavbarIcons = {
    textDecoration: 'none',
   }