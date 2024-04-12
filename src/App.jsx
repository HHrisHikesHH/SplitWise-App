import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
//App is only HomePage
function App() {
  return (
    <>
      <div className='button'>
        <button>Login</button>
        <button>Signin</button>
      </div>
      <div className='home'>
        <h2>Welcome to </h2>
        <h1 className='welcome'>SplitWise!</h1>
        <p>Just Split it!! </p>
      </div>
    </>
  )
}

export default App
