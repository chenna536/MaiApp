import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './landing_page.jsx';
import Dashboard from './Dashboard.jsx';
import CreativityPage from './CreativityLanding.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import ReportScreen from './ReportScreen.jsx'
import MICSReport from './MICSReport.jsx';
import Cardslist from '../unused/Cardslist';
import TestApi from './TestApi.js'

export default function App() {
  return (
    <Router>
      <div style={{ width: '100%' }} >
        <Switch>
          <ScrollToTop>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/creativity" component={CreativityPage} />
          <Route path="/micsreport" component={MICSReport} />
          <Route path='/report' component={ReportScreen}/>
          <Route path='/assessment' component={Cardslist}/>
          <Route path='/test' component={TestApi}/>
          </ScrollToTop>
        </Switch>
      </div>
    </Router>
  );
}
