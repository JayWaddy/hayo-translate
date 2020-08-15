import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Styles
import GlobalStyle from './styles/GlobalStyle';

// Pages
import Translate from './pages/Translate';
import Glossary from './pages/Glossary';

// Components
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="light-theme">
      <GlobalStyle/>
        <Router>
          <Switch>
            <Route exact path='/' component={Translate}/>
            <Route exact path='/glossary' component={Glossary}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </>
  );
}