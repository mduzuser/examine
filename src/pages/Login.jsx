function Login() {
  return (
    <div className=" login-container">
      <figure className="login-abs-bg">
        <img src="./image/Rectangle 58.png" />

        <p>My Account</p>
      </figure>
      <div className="container">
        <div className="login-boxes">
          <div className="login-a">
            <form>
              <p className="login-a-name">LOGIN</p>
              <label>
                <span>Username or email address *</span>
                <input type="text" />
              </label>

              <label>
                <span>Password *</span>
                <input type="password" />
              </label>

              <button>Log in</button>

              <p className="login-forget">Lost your password?</p>
            </form>
          </div>
          <div className="login-b">
            <form>
              <p className="login-b-name">REGISTER</p>
              <label>
                <span>Email address *</span>
                <input type="email" />

                <p>
                  A link to set a new password will be sent to your email
                  address.
                </p>
                <button>Register</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
