import React from "react";
import { Link } from "react-router";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-200 border-t">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                {/* About */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">HobbyHub</h2>
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
                            <Link to="/about" className="hover:text-blue-600">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/groups" className="hover:text-blue-600">
                                Find Groups
                            </Link>
                        </li>
                        <li>
                            <Link to="/create" className="hover:text-blue-600">
                                Create a Group
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links (external) */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <div className="flex space-x-4 mb-4 text-xl">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="hover:text-blue-600"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                            className="hover:text-sky-500"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
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
            <div className="border-t py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} HobbyHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
