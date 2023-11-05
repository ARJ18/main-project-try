import { authModalState } from "@/atoms/authModalAtoms";
import { auth } from "@/firebase/firebase";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type: "login") => {
        setAuthModalState((prev) => ({
            ...prev,
            type,
        }));
    };

    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
    });

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputs);
    };
    return (
        <form className="px-6 pb-4 space-y-6" onSubmit={handleRegister}>
            <h3 className="text-xl font-medium text-white">
                Create an Account
            </h3>
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                >
                    Email Address
                </label>
                <input
                    onChange={handleChangeInput}
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="name@email.com"
                />
            </div>
            <div>
                <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                >
                    Display Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="John Doe"
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
                Sign Up
            </button>

            <div className="text-sm font-medium text-gray-500">
                Already have an account?&nbsp;
                <a
                    href="#"
                    className="text-blue-700 hover:underline"
                    onClick={() => handleClick("login")}
                >
                    Log In
                </a>
            </div>
        </form>
    );
};
export default Signup;
