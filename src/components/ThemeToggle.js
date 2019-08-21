// There are two different examples to consume the Context.
// With this given example, the code looks a little easier to read & understand.
// but the limitation is that only one Context can be consumed in a given file.

// Take a look at SignInToggle file, that showcase a different way of consuming the Context
// Take a look at NavBar file, that showcase a way of consuming the Multiple Context in a file

// This Component is used to toggle the theme for the app by clicking on a button.

import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';


class ThemeToggle extends Component {
    //The contextType property on a class can be assigned a Context object created by React.createContext()
    // you can use a static class field to initialize your contextType
    static contextType = ThemeContext;
    render() { 
        // The props of the ThemeContext are now available in this.context
        var {toggleTheme} = this.context; // destructure the value from this.context
        return (  
            // onClick of the button, toggleTheme method is executed which internally will update the state on ThemeContext
            <button onClick={toggleTheme}>Toggle the theme</button>
        );
    }
}
 
export default ThemeToggle;
