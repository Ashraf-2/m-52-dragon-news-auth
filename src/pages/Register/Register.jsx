import { Link } from "react-router-dom";
import Header from "../SharedPages/Header/Header";
import Navbar from "../SharedPages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password= form.get('password');
        console.log(email,password,name,photo);
        
        //create user and pass to authcontext
        createUser(email,password)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>            
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <h2 className="text-4xl font-bold ">Register Here</h2>
                    <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
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
                                <input type="submit" value="Register" className="btn text-white normal-case btn-primary" />
                            </div>
                        </form>
                        <p className="mx-auto my-3">Have an accout? <Link to="/login" className="text-red-500 font-medium">Login Here</Link></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;