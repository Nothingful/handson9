import React, { Component } from 'react';

import { AuthProvider } from './context/AuthContext';

import Articles from './components/Articles';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Articles />  
      </AuthProvider>
    );
  }
}

export default App;
