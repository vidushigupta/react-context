// This is the ThemeContext used to provide the context values to the children in the tree
import React, { createContext, Component } from 'react';

// Creates a Context object name as ThemeContext.
// When React renders a component that subscribes to this ThemeContext object it will read the current context value 
// from the closest matching Provider above it in the tree.
export const ThemeContext = createContext();

// Every Context object comes with a Provider React component 
// that allows consuming components to subscribe to context changes.
class ThemeContextProvider extends Component {
    state= {
        isLightTheme: true,
        light:{
            syntax: '#555', ui:'#ddd', bg:'#eee'
        },
        dark:{
            syntax: '#ddd', ui:'#333', bg:'#555'
        }
    }

    //method used to toggle the theme
    toggleTheme = () => {
            this.setState({isLightTheme : !this.state.isLightTheme});
    }

    render() { 
        return (  
             // Accepts a value prop to be passed to consuming components that are 
            // descendants of this Provider. One Provider can be connected to many consumers.
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                 {/* All the children components can use ThemeContext.Consumer API & get the updated value prop*/}
                 {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;