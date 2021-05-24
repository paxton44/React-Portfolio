import React from 'react';
import { BrowserRouter as Router, Route, Switch, MemoryRouter} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/HomePage';
import './App.css';
import Portfolio from './pages/Portfolio'
import ContactInfo from './pages/ContactInfo';




const App = () => (
  <>
  <Router>
  <MemoryRouter>
    <Container>
      <Jumbotron>
      
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/ContactInfo" component={ContactInfo} />

          
        </Switch>
    
       {/* <HomePage /> */}
       {/* <Portfolio /> */}
       {/* <ContactInfo /> */}
       
      </Jumbotron>

      
    </Container>
  </MemoryRouter>
  </Router> 
  </>
);

export default App;
