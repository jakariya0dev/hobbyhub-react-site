import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./../../config.firebase.js";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    const authData = {
        user,
        setUser,
        isLoading,
        setIsLoading,
    };

    return <AuthContext value={authData}>{children}</AuthContext>;
}
