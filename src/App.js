import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import SideBar from './components/sidebar/sidebar.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import AnalyticsPage from './pages/analytics-page/analytics-page.component';
import HistoryPage from './pages/history-page/history-page.component';
import SettingsPage from './pages/settings-page/settings-page.component';

import './App.css';

function App() {
  return (
    <div className="flex flex-row max-h-screen max-w-screen">
      <SideBar />
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/analytics' component={AnalyticsPage} />
        <Route exact path='/history' component={HistoryPage} />
        <Route exact path='/settings' component={SettingsPage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);