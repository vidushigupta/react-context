// This is the AuthContext used to provide the context values to the children in the tree
import React, { createContext, Component } from 'react';

// Creates a Context object name as AuthContext.
// When React renders a component that subscribes to this AuthContext object it will read the current context value 
// from the closest matching Provider above it in the tree.
export const AuthContext = createContext();

// Every Context object comes with a Provider React component 
// that allows consuming components to subscribe to context changes.
class AuthContextProvider extends Component {
    state = {
        isAuthorized: false
    }
    
    //method used to toggle the state
    toggleAuth = () => {
        this.setState({isAuthorized : !this.state.isAuthorized});
    }

    render() {
        return (
            // Accepts a value prop to be passed to consuming components that are 
            // descendants of this Provider. One Provider can be connected to many consumers.
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                {/* All the children components can use AuthContext.Consumer API & get the updated value prop*/}
                {this.props.children}
            </AuthContext.Provider>

        );
    }
}

export default AuthContextProvider;