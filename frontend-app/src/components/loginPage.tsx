import React from 'react';

function LoginPage() {
  return (
    <>
      <div className="center">
        <h1>Login</h1>
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
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login"></input>
          <div className="signup_link">
            Not a member? <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage;