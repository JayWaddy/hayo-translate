import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Styles
import GlobalStyle, { AppContainer } from './styles/GlobalStyle';

// Pages
import Translate from './pages/Translate';
import Glossary from './pages/Glossary';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <AppContainer className="light-theme">
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Translate}/>
            <Route exact path='/glossary' component={Glossary}/>
          </Switch>
          <Footer/>
        </Router>
      </AppContainer>
    </>
  );
}