import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    return (
        <div className="bg-blue-50 py-12 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in the Loop</h2>
                <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter to get updates on new hobby groups, events, and features.
                </p>

                {
                    email ? <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form> : <p className="text-amber-400 text-2xl">Thank You for subscribe!</p>
                }
            </div>
        </div>
    );
};

export default Newsletter;
