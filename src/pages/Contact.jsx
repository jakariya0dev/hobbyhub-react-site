import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>HobbyHub | Contact Us</title>
        <meta name="description" content="Get in touch with HobbyHub team" />
      </Helmet>

      <div className="max-w-7xl min-h-screen mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">📬 Get in Touch</h2>
            <p className="text-gray-700">
              Have questions, feedback, or ideas? Reach out to us
            </p>
            <div>
              <p className="text-lg font-medium">📞 Phone:</p>
              <p className="text-gray-700">+880 1234-567890</p>
            </div>
            <div>
              <p className="text-lg font-medium">📧 Email:</p>
              <p className="text-gray-700">support@hobbyhub.com</p>
            </div>
            <div>
              <p className="text-lg font-medium">📍 Address:</p>
              <p className="text-gray-700">Dhaka, Bangladesh (Remote Office)</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
