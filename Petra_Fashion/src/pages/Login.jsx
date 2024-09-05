import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center p-4">
            {/* Left side image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center mb-6 md:mb-0">
                <img
                    className="object-contain w-3/4 md:w-[70%]"
                    src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?size=626&ext=jpg&ga=GA1.1.1610211452.1705742525&semt=ais_hybrid"
                    alt="Auth Illustration"
                />
            </div>

            {/* Right side form */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {!isLogin && (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                        </>
                    )}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            placeholder="Your Password"
                        />
                    </div>
                    <div className="flex justify-between mb-6">
                        <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
                    </div>

                    <button className="w-full bg-blue-500 text-white p-2 rounded-lg mb-4">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>

                    <div className="flex items-center justify-between">
                        <button className="bg-red-500 text-white p-2 rounded-lg w-full mb-4">Login with Google</button>
                        <button className="bg-blue-700 text-white p-2 rounded-lg w-full mb-4 ml-4">Login with Facebook</button>
                    </div>

                    <p className="text-sm text-center">
                        By continuing, you agree to our{' '}
                        <a href="#" className="text-blue-500">Privacy Policy</a> and{' '}
                        <a href="#" className="text-blue-500">Terms of Service</a>.
                    </p>

                    <div className="mt-6 text-center">
                        <button onClick={toggleAuth} className="text-sm text-blue-500">
                            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
