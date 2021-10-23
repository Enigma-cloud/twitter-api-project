import React from 'react';

import SideBar from './components/sidebar/sidebar.component';
import PageContent from './components/page-content/page-content.component';

import './App.css';

function App() {
  return (
    <div className="flex">
      <SideBar  />
      <PageContent />
    </div>
  );
}

export default App;