import { FcGoogle } from 'react-icons/fc';
import { FaApple } from "react-icons/fa";
import { BrandLogo, Discord, GitHub, LinkedIn, Twitter } from '../../assets';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = email => /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password => password.length >= 8;
    return (
        <>
            <div className="flex h-screen">
                <div className="hidden md:flex w-1/2 bg-[#605BFF]">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div className="flex pl-10 pt-10 justify-start">

                            <img src={BrandLogo} alt="Brand Logo" className="w-16 h-16" />
                        </div>
                        <h2 className='font-montserrat uppercase text-[#FFFFFF] text-title-xxl text-center font-semibold leading-loose tracking-wide'>
                            BASE
                        </h2>
                        <div className='flex mb-10 items-center justify-center gap-10'>
                            <img src={GitHub} alt="Brand Logo" className="w-12 h-12" />
                            <img src={Twitter} alt="Brand Logo" className="w-12 h-12" />
                            <img src={LinkedIn} alt="Brand Logo" className="w-12 h-12" />
                            <img src={Discord} alt="Brand Logo" className="w-12 h-12" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 rounded-1xl shadow-lg p-5 items-center">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <h2 className="text-2xl font-semibold mb-5">Sign in</h2>
                            <p className='font-semibold text-gray-400 '>Sign into your Account</p>
                            <div className='flex justify-center items-center mt-3'>
                                <button className='w-full flex bg-[#FEFFFE] justify-center items-center m-2 p-2 rounded-xl'>
                                    <FcGoogle className="flex justify-center items-center w-[25px] h-[25px] mr-2" />
                                    <p className='font-montserrat'>Sign in with Google</p>
                                </button>
                                <button type="button" className='w-full flex bg-[#FEFFFE] justify-center items-center m-2 p-2 rounded-xl'>
                                    <FaApple className="flex justify-center items-center  w-[25px] h-[25px] mr-2" style={{ color: "#999999" }} />
                                    <p className='font-montserrat'>Sign in with Apple</p>
                                </button>

                            </div>
                            <div className='flex w-[422px] h-[390px] bg-[#F8FAFF] items-center justify-center'>
                                <div className='rounded-lg'>
                                    <form className="flex flex-col items-center">
                                        <div className='flex flex-col relative w-full text-sm mb-5'>
                                            <h1 className='font-lato text-[#000000] mb-2'>Email address</h1>
                                            <input
                                                placeholder="Enter your email"
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="block p-3 font-medium w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border border-gray-300  sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            />
                                        </div>
                                        <div className='flex flex-col relative text-sm w-full'>
                                            <h1 className='font-lato text-[#000000] mb-2'>Password</h1>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                className="block p-3  font-medium w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border border-gray-300 sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            />
                                        </div>
                                        <p className='m-2 py-2 text-sm flex justify-start w-full font-semibold text-[#5E9BDB] cursor-pointer hover:text-blue-500'> Forgot password ? </p>
                                        <button
                                            type="submit"
                                            onClick={() => navigate("/")}
                                            disabled={!isEmailValid(email) || !isPasswordValid(password)}
                                            className="w-full px-6 py-2 text-white bg-[#605BFF] rounded-xl hover:bg-blue-600"
                                        >
                                            Sign in
                                        </button>
                                    </form>
                                    <div className='flex mt-5 text-center'>
                                        <p className='ml-12 mr-2 font-semibold text-gray-400'>{"Don't"} you have an account?</p>
                                        <p className='font-semibold text-[#5E9BDB] cursor-pointer hover:text-[#5E9BDB]-800 hover:text-blue-500 '>Register here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login