import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { useForm } from "react-hook-form";
import "./index.scss";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {}, []);

  return (
    <div id="loginpage">
    <div class="ocean">
    <div class="wave"></div>
    <div class="wave"></div>
</div>
    <section >
    <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Sign Up</h1>
                <div className="social-container">
                    <a href="https://Github.com/YasinDehfuli" target="_blank" className="social"><i className="fab fa-github"></i></a>
                    <a href="https://Codepen.io/YasinDehfuli" target="_blank" className="social"><i className="fab fa-codepen"></i></a>
                    <a href="mailto:Ydehfuli@gmail.com" target="_blank" className="social"><i className="fab fa-google"></i></a>
                </div>
                <span>Or use your Email for registration</span>
                <label>
                    <input type="text" placeholder="Name"/>
                </label>
                <label>
                    <input type="email" placeholder="Email"/>
                </label>
                <label>
                    <input type="password" placeholder="Password"/>
                </label>
                <button style={{marginTop: '9px'}}>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                
                <span> sign in using E-Mail Address</span>
                <label>
                <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            defaultValue="eve.holt@reqres.in"
            aria-describedby="emailHelp"
            {...register("email")}
          />
                </label>
                <label>
                <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            defaultValue="cityslicka"
            {...register("password", { required: true })}
          />
                </label>
                <a href="#">Forgot your password?</a>
                <button type="submit" className="btn btn-primary">
          Submit
        </button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Log in</h1>
                    <p>Sign in here if you already have an account </p>
                    <button className="ghost mt-5" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Welcome!</h1>
                    <p>To Maintain ScheduledEmails ... </p>
                    {/* <button className="ghost" id="signUp">Sign Up</button> */}
                </div>
            </div>
        </div>
    </div>
</section></div>
    
  );
};

export default Login;
