// Following component is using the ThemeContext to change the look & feel of books list according to selected theme.
// The component immidiately react to the toggle of theme on UI
// This component is the consumer of ThemeContext component
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/* eslint-disable */

class BookList extends Component {

    render() {
        {/*<MyContext.Consumer> {value =>  return something based on the context value } </MyContext.Consumer> */}
        {/* it requires a function as child. The function receives the current context value and returns a React node. */}
        return (
            <ThemeContext.Consumer>{(themeContext) => {
                {/* argument themeContext will be equal to the value prop of the closest Provider for this context above in the tree. For now - ThemeContext.Provider*/}
                const { isLightTheme, light, dark } = themeContext; {/* Destructure the values from the argument */}
                const theme = isLightTheme ? light : dark; {/*Drive the value of 'theme' based on passed argument*/}

                return (
                    <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
                        {/*Adjust the style values  based on latest theme provided by Theme Provider */}
                        <ul>
                            <li style={{ background: theme.ui }}>Book-1</li>
                            <li style={{ background: theme.ui }}>Book-2</li>
                            <li style={{ background: theme.ui }}>Book-3</li>
                        </ul>
                    </div>
                )
             }
            }

            </ThemeContext.Consumer>

        );
    }
}

export default BookList;
