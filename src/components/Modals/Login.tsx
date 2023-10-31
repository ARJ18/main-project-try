import React from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    return (
        <form className="px-6 pb-4 space-y-6">
            <h3 className="text-xl font-medium text-white">
                Sign In to CodeQuest
            </h3>
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="name@email.com"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="********"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
            >
                Log In
            </button>

            <button className="flex w-full justify-end">
                <a
                    href="#"
                    className="text-sm text-brand-orange hover:underline w-full text-right block"
                >
                    Forgot Password
                </a>
            </button>

            <div className="text-sm font-medium text-gray-500">
                Not Registered?&nbsp;
                <a href="#" className="text-blue-700 hover:underline">
                    Create Account
                </a>
            </div>
        </form>
    );
};
export default Login;
