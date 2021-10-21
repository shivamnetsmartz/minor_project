import React,{useState, useEffect} from 'react'
import login from "../images/login.jpg";
import logo from "../images/logo.svg"
// import { NavLink } from 'react-router-dom';
const Signin = () => {
  const currentValues = { username: "", password: "" };
  const [loginValues, setLoginValues] = useState(currentValues);
  const [loginErrors, setLoginErrors] = useState({});
  const [inSubmit, setInSubmit] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
    console.log(loginValues);

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(validate(loginValues));
    setInSubmit(true);
  }


  useEffect(() => {
    console.log(loginErrors);
    if (Object.keys(loginErrors).length === 0 && inSubmit) {
      console.log(loginValues);
    }
  });


  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password <= 4) {
      errors.password = "Password must be more than 4 characters!";
    }
    return errors;
  }

  return (

    <>

      <div className="container mt-5">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={login} alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src={logo} alt="logo" className="logo" />
                </div>
                <p className="login-card-description">Login Account</p>
                <form className="login-form" id="login_form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Username"
                      value={loginValues.username}
                      onChange={handleChange} />
                  </div>
                  <p>{loginErrors.username}</p>

                  <div className="form-group mb-4">
                    <input type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="***********"
                      value={loginValues.password}
                      onChange={handleChange} />
                  </div>
                  <p>{loginErrors.password}</p>

                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Login" />
                </form>
                <a href="#!" className="forgot-password-link text-dark">Forgot password?</a>

                <nav className="login-card-footer-nav">
                  <a href="#!" className="text-dark">Terms of use.</a>
                  <a href="#!" className="text-dark">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Signin
