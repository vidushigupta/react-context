// Following component is using the AuthContext & ThemeContext 
// This component updates the authorization status as well the look & feel of books list according to provider values.
// The component immidiately react to the authorization state
// The component immidiately react to the toggle of theme on UI
// This component is the consumer of AuthContext & ThemeContext component
// The order of usage of the two context does not matter

import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
/* eslint-disable */

class NavBar extends Component {
    render() {
         {/*<MyContext.Consumer> {value =>  return something based on the context value } </MyContext.Consumer> */}
        {/* it requires a function as child. The function receives the current context value and returns a React node. */}

        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                {/* Argument authContext & themeContext will be equal to the value prop of the closest Provider for this context above in the tree. 
                For now - AuthContext.Provider, ThemeContext.Provider
                */}

                    const { isAuthorized, toggleAuth } = authContext
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;

                    return ( 
                        //The below JSX uses the values to change the color theme.
                        // Also it renders the message regarding if the user logged in / out
                        <nav style={{ background: theme.bg, color: theme.syntax }}>
                            <h1>Context App</h1>
                            <div>{isAuthorized ? "Yay!! Logged in" : " Logged out :("}</div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }
                }
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default NavBar;