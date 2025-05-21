import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
  };

  return (
    <div className="py-12 px-4 bg-base-300">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay in the Loop
        </h2>
        <p className="mb-6">
          Subscribe to our newsletter to get updates on new hobby groups,
          events, and features.
        </p>

        {email ? (
          <p className="text-green-600 mb-4">
            Thank you for subscribing with {email}!
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <input
              defaultValue={email}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs mb-4 md:mb-0 md:mr-4"
              required
            />
            <button
              onSubmit={handleSubscribe}
              type="submit"
              className="btn btn-primary"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
