import React, { Component } from 'react';
import Header from './Header';

/**
 * Input we require from the user - 
 * Gender - Boolean/Optional M F
 * Age - int
 * Weight - int kg
 * Height - int cm
 * Activity Level ( 1 - 5)
 * 
 * For every child component accessing data you need to 
 * declare the shared state in their closest common parent. 
 * 
 * This will be in the TDEE container as the inputContainer and ResultsContainer  
 * as well as Macros and Calories breakdown need access to this state
 */

class TDEEContainer extends Component {

    state = {
        TDEEInput: {
            age: 26,
            weight: 58,
            height: 167,
            activityLevel: 3
        }
    }

    render() {
        return (
            <React.StrictMode>
                <Header />            
            </React.StrictMode>
        );
    }
}

export default TDEEContainer;