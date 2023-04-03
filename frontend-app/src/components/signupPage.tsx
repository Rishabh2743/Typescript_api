import React from 'react';

function SignupPage() {
  return (
    <>
      <div className="center">
        <h1>Signup</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required></input>
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="Confirm password" required></input>
            <span></span>
            <label>confirm Password?</label>
          </div>
          <input type="submit" value="Signup"></input>
          <div className="login_link">
            Already signed up? <a href="/login">Login</a>
          </div>
        </form>
      </div>

    </>
  )
}

export default SignupPage;