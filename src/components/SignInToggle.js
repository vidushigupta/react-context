// There are two different examples to consume the Context.
// Take a look at ThemeToggle file, that showcase a different way of consuming the Context

// This Component is used to toggle the sign in status for the app by clicking on a button.
// This Component is subscribed to the AuthContext changes, as well controls the change in state of AuthContext

import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';

class ToggleSignIn extends Component {

    render() {
        // Here the button is surrounded by AuthContext Consumer
        // On click of button the toogleAuth of AuthContext is executed, which in turn will update the state in AuthContext
        // And accordingly other consumers of the AuthContext will react to the updated state
        // hence keeping the global state provided to all the children in tree.
        return (
            // All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes
            <AuthContext.Consumer>{(authContext) => {
                // AuthContext.Consumer expects function as a children.
                // The function receives the current context value and returns a React node.
                const { isAuthorized, toggleAuth } = authContext;
                return (
                    // Here there are two individual actions are happening. Note: these two actions can be modules in seperate files as well.
                    // 1. onClick is calling the 'toggleAuth' method of AuthContext which ultimately toggle the authorization status
                    // 2. The button text is subscribed to re-render the message based on any updates in AuthContext using isAuthorized prop
                    <button onClick={toggleAuth}>{isAuthorized ? "Sign Out" : "Sign In"}</button>
                )
            }}
            </AuthContext.Consumer>
        )
    }
}

export default ToggleSignIn; 