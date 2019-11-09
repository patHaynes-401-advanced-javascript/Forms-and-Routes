import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ListPage from '../containers/List-Page';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters/:searchTerm" component={ListPage} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
