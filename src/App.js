// An example Application showcasing how the 'React Context' can be used to pass the global data to children tree of components.
// Global data is available to all the components which are passed as children to the Context providers

import React, { Component } from 'react';
import NavBar from './components/NavBar'
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ToggleSignIn from './components/SignInToggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider> {/* Theme Context Provider to containing the state as a 'value' prop which all the children can access using Consumer API*/}
          <AuthContextProvider> {/* Authorization Context to be used by components in the tree */}
            <NavBar /> {/* Example Nav bar */}
            <BookList /> {/* Example Book list  */}
            <ThemeToggle /> {/* Action component to toggle the theme on the application */}
            <ToggleSignIn /> {/* Component to toggle the user sign in information & Also subscribe to the Context updates */}
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;