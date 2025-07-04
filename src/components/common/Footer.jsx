import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-base-content/50">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-500">
            Hobby<span className="text-amber-500">Hub</span>
          </h2>
          <p>
            Discover, join, or create local hobby groups. HobbyHub connects
            people through shared passions—whether it’s painting, hiking,
            reading, or more.
          </p>
        </div>

        {/* Quick Links (internal) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/groups" className="hover:text-blue-600">
                All Groups
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-600">
                My Groups
              </Link>
            </li>
            <li>
              <Link to="/group/create" className="hover:text-blue-600">
                Create a Group
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links (external) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4 text-xl">
            <a
              href="https://facebook.com/jakariya.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/dev_jakariya"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/jakariya.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:support@hobbyhub.com"
              aria-label="Email"
              className="hover:text-green-600"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-gray-500">support@hobbyhub.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 text-center text-sm">
        © {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
