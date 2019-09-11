import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { firebase } from '../firebase';

export const Auth = ({
    showLogin,
    setShowLogin,
}) => {
    const [login, setLogin] = useState('')
    const [signUp, setSignUp] = useState('')

    return (
        <div
            className={showLogin ? 'login-signup login-signup__overlay' : 'login-signup'}
            data-testid="login-signup-comp"
        >   
            {showLogin && (
            <>
                <div className="login-signup__main" data-testid="login-signup-main">
                    <div data-testid="quick-login-signup">
                        <h4 className="header">Login</h4>
                        <span
                        className="login-signup__cancel-x"
                        data-testid="login-signup-quick-cancel"
                        aria-label="Cancel adding task"
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setShowLogin(false);
                        }}
                        onKeyDown={() => {
                            setShowLogin(false);
                        }}
                        >
                        X
                        </span>
                    </div>
                    
                    <div className="login_details">
                        <label 
                            className="login-signup__label" 
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            className="login-signup__content"
                            aria-label="Enter your task"
                            data-testid="login-signup-content"
                            type="text"
                        />
                        
                        <label
                            className="login-signup__label"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="login-signup__content"
                            aria-label="Enter your task"
                            data-testid="login-signup-content"
                            type="text"
                        />
                        
                    </div>
                    <button
                        type="button"
                        className="login-signup__submit"
                    >
                        Log In
                    </button>

                    <br/>

                    <span>
                        Don't have an account yet?
                        <a href="#">Signup Here</a>
                    </span>
                </div>
            </>
            )}
        </div>
    )
}

Auth.propTypes = {
    showLogin: PropTypes.bool,
    setShowLogin: PropTypes.func,
  };