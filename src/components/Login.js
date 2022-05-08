import React from "react";
import {signInGoogle} from "../firebase";

const Login = () => {
    const handleSignIn = () => {
        signInGoogle()
        .then(res => {
            const name = res.user.displayName;
            const email = res.user.email;
            console.log(name, email);
        })
        .catch(e => console.log(e.message));
    }
    return (
        <div className="bg-gradient-to-b from-azure to-true_blue absolute top-0 bottom-0 left-0 right-0">
            <div className="relative top-[calc(50vh-144px)] left-[calc(50vw-210px)] py-9 w-420 text-center bg-white rounded-md">
                <h2 className="text-xl font-semibold mb-2">Welcome to Chat App</h2>
                
                <div
                    className="cursor-pointer bg-blue_berry text-white mt-3 py-2 px-4 rounded-md inline-block hover:opacity-90 duration-200"
                    onClick={handleSignIn}
                >
                    Sign with Google
                </div>
            </div>
        </div>
    )
}

export default Login;