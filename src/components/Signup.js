import React,{useState, useEffect} from 'react';
import signup from "../images/signup/signup.jpg";
import "../css/signup.css";
const Signup = () => {
    const initialValues = {username:"", email:"", password:"", confirmPassword:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    

    const handleChange = (e) =>{
        
        const {name, value}= e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
     
    };


    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // if(formValues.password!==formValues.confirmPassword){
        //     alert("Passwords don't match");
        // }
    }


    useEffect(() =>{
        console.log(formErrors);
         if (Object.keys(formErrors).length === 0 && isSubmit){
             console.log(formValues);
         }
    });


    const validate = (values) =>{
    const errors ={};
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!values.username){
        errors.username = "Username is required!";
    }
    if(!values.email){
        errors.email = "Email is required!";
    }
    else if (!regex.test(values.email)){
        errors.email = "This is not a valid email format!";
    }
    if(!values.password){
        errors.password = "Password is required!";
    }else if (values.password < 4){
        errors.password = "Password must be more than 4 characters!";
    }
    if(!values.confirmPassword){
        errors.confirmPassword= "Confirm Password is required!";
    }
    if(values.password!==values.confirmPassword){
        console.log("Confirm password must match with Password")
    }
    
    return errors;
    }
   
 return (
        <>
            <div className="container mt-5">
         
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={signup} alt="register" className="login-card-img" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">

                                <p className="login-card-description">Create Account</p>
                                   <hr></hr>
                                <form className="register-form" id="register_form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" 
                                          name="username" 
                                          id="name" 
                                          className="form-control" 
                                          placeholder="Enter Your Name" 
                                          value={formValues.username} 
                                          onChange={handleChange}/>
                                    </div>
                                    <p>{formErrors.username}</p>

                                    <div className="form-group">
                                        <input type="text" 
                                          name="email" 
                                          id="email" 
                                          className="form-control" 
                                          placeholder="Enter Your Email"  
                                          value={formValues.email} 
                                          onChange={handleChange}/>
                                    </div>
                                    <p>{formErrors.email}</p>

                                    <div className="form-group mb-4">
                                        <input type="password" 
                                           name="password" 
                                           id="password" 
                                           className="form-control" 
                                           placeholder="Enter Your Password"  
                                           value={formValues.password} 
                                           onChange={handleChange}/>
                                    </div>
                                    <p>{formErrors.password}</p>

                                    <div className="form-group mb-4">
                                        <input type="password" 
                                         name="confirmPassword"
                                         id="confirmPassword" 
                                         className="form-control" 
                                         placeholder="Confirm Your Password"  
                                         value={formValues.confirmPassword} 
                                         onChange={handleChange}
                                         />
                                    </div>
                                    <p>{formErrors.confirmPassword}</p>
                                        <input name="signup" id="button"  className="btn btn-block login-btn mb-4" type="submit" value="Register"/>
                                    
                                </form>


                                <nav className="login-card-footer-nav">
                                    <a href="#!" className="text-dark">I am already Register</a>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
