import { useContext } from "react";
import Navbar from "../../Shared/Header/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const {logInUser} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = (e) => {
            e.preventDefault();
            const form = new FormData(e.target)
            const email = form.get('email');
            const password = form.get('password')

           logInUser(email, password)
           .then(res => {
            toast('Login SucessFuly')
            navigate(location?.state ? location.state : '/')

           } )
           .catch(err => toast(' Wrong Email Or Password'))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex h-full items-center justify-center my-40 md:p-0">
                <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md">
                    {/* design side  */}
                    <div className="relative hidden items-center justify-center bg-green-300 md:flex md:w-[50%]">
                        <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-green-300 to-green-400"></div>
                        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-green-300 to-green-400"></div>
                        <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-green-300 to-green-400 transition-all"></div>
                        <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-green-300 to-green-400"></div>
                        <div className="z-10 space-y-2 text-center">
                            <h2 className="text-3xl font-medium text-Black/80">Welcome Back</h2>
                            <p className="animate-pulse text-sm text-Black/60">Please Enter You Information</p>
                        </div>
                    </div>
                    {/* form side  */}
                    <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
                        <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-green-400">Log In </h2>
                        <form onSubmit={handleLogin} className="flex w-full flex-col items-center justify-center gap-4">
                            <input
                                className="w-[80%] rounded-lg border border-green-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-300/50 md:w-[60%] dark:text-zinc-400"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                className="w-[80%] rounded-lg border border-green-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-300/50 md:w-[60%] dark:text-zinc-400"
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            <p className="text-[14px] text-gray-400">
                                Do not have an account ? <Link className="text-lime-500" to='/register'>Creat One</Link>
                            </p>
                            <button className="uppercase w-[80%] rounded-lg bg-green-400 px-6 py-2 font-medium text-white outline-none hover:bg-blue-500 md:w-[60%]" type="submit">
                                Submit
                            </button>
                        </form>
                        {/* divider  */}
                        <div className="my-8 flex items-center px-8">
                            <hr className="flex-1 border-green-400" />
                            <div className="mx-4 text-green-400">OR</div>
                            <hr className="flex-1 border-green-400" />
                        </div>
                        {/* sign with google */}
                        <button className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-green-400">
                            <div className="relative z-20 flex h-full items-center bg-green-400 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-green-400">
                                Signin with
                            </div>
                            <span className="flex h-full items-center px-4 text-xl font-bold text-green-400 duration-300 group-hover:bg-green-400 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;