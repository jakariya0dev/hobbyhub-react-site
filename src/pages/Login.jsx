import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./../../config.firebase.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace with real auth logic
        alert(`Logging in with ${email}`);
    };

    const handleGoogleLogin = () => {

        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;

                console.log(
                    "User signed in with Google, returning token and profile:",
                    user,
                    )
            }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);

        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login to HobbyHub</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                <div className="divider">OR</div>

                <button
                    className="btn btn-outline w-full flex items-center justify-center gap-2"
                    onClick={handleGoogleLogin}
                >
                    <FcGoogle className="text-xl" />
                    Login with Google
                </button>

                <p className="text-sm text-center mt-4">
                    Don’t have an account?{" "}
                    <a href="/src/pages/Signup" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
