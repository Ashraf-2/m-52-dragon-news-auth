/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../SharedPages/Header/Header";
import Navbar from "../SharedPages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = (form.get('email'));
        const password = (form.get('password'));
        // console.log(email,password);
        console.log('bal');
        signIn(email,password)
        .then(result => {
            console.log(result)
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary text-white normal-case" />
                            </div>
                        </form>
                        <p className="mx-auto my-3">Do not have an accout? <Link to="/register" className="text-red-500 font-medium">Register Here</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;