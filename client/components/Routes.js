import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Canvas from './Canvas';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/:hash' component={Canvas} />
      </Router>
    );
  }
}

export default Routes;
