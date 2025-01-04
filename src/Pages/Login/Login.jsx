import { Helmet } from "react-helmet-async";
import LoginImage from '../../assets/others/authentication2.png'

const Login = () => {
  return (
    <div>
      <Helmet>
        <title> | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-row lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
             <img src={LoginImage} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                 
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-600">Reload Captcha</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-gray-400 text-center">New here? Create a New Account</p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
