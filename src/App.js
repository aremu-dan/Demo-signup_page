import React, { useState } from 'react'
// RESOURCES
import AppLogo from './resources/images/icons/AppLogo_black.png'
// STYLES
import './resources/css/App.css'
import './resources/css/LoginPage.css'
// COMPONENTS

export default function App() {

  /* STATES */
  //
  const [switchForm, setSwitchForm] = useState(false)
  //
  const [userCredentials, setUserCredentials] = useState({
    emailSignIn: '',
    passwordSignIn: '',
    nameSignUp: '',
    emailSignUp: '',
    passwordSignUp: '',
  })

  /* COMPONENT FUNCTIONS */
  //
  const handleSwitch = () => {
    setSwitchForm((prevState) => !prevState)
  }

  //
  const HandleInput = (e) => {
    setUserCredentials((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }
  
  return (
    <div className='App'>
      <div className='' id='loginPage'>
      <div className={switchForm ? 'loginContent switch' : 'loginContent'}>
        <div className='contentHeader'>
          <img src={AppLogo} alt='app logo' className='App-logo' />
          <span>Demo</span>
        </div>
        {/*  */}
        <div className='slideTop'>
          <div className='overlay'></div>
          <div className='row'>
            <div className='greeting' style={{ paddding: '0px' }}>
              <div className='signIn' style={{ paddingBottom: '0px' }}>
                <div className='container'>
                  <h1 style={{ margin: '5px auto' }}>welcome back!</h1>
                  <p>
                    Keep connected with us please login with your personal info
                  </p>
                </div>
              </div>
              <div className='signUp'>
                <div className='container'>
                  <h1 style={{ margin: '5px auto' }}>hello, friend!</h1>
                  <p>enter your personal details and start a journey with us</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <button
                className='button'
                onClick={() => handleSwitch()}
              ></button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='slideBottom'>
          <div className='row'>
            <div className='greeting'>
              <div className='signIn'>
                <div className='row'>
                  <div className='container'>
                    <h1>sign in to Demo</h1>
                    <span>use your email account.</span>
                  </div>
                  <div className='row'>
                    <form className='form'>
                      <input
                        type='email'
                        placeholder='Email'
                        name='emailSignIn'
                        className='input'
                        onChange={HandleInput}
                      />
                      <input
                        type='password'
                        placeholder='Password'
                        name='passwordSignIn'
                        className='input'
                        onChange={HandleInput}
                      />
                      <div className='forgotPassword'>
                        <span>Forgot your password?</span>
                      </div>
                      <button className='button'>sign in</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='signUp'>
                <div className='container'>
                  <h1>create account</h1>
                  <p>
                    Keep connected with us please login with your personal info
                  </p>
                </div>
                <div className='row'>
                  <form className='form'>
                    <input
                      type='text'
                      placeholder='Name'
                      name='nameSignUp'
                      className='input'
                      onChange={HandleInput}
                    />
                    <input
                      type='email'
                      placeholder='Email'
                      name='emailSignUp'
                      className='input'
                      onChange={HandleInput}
                    />
                    <input
                      type='password'
                      placeholder='Password'
                      name='passwordSignUp'
                      className='input'
                      onChange={HandleInput}
                    />
                    <button className='button'>sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
