// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Navigation Links */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold mb-2">Quick Links</h5>
                        <ul>
                            <li><a href="/men" className="hover:underline">Men</a></li>
                            <li><a href="/women" className="hover:underline">Women</a></li>
                            <li><a href="/kids" className="hover:underline">Kids</a></li>
                            <li><a href="/new-arrivals" className="hover:underline">New Arrivals</a></li>
                            <li><a href="/best-sellers" className="hover:underline">Best Sellers</a></li>
                        </ul>
                    </div>

                    {/* Customer Service Links */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold mb-2">Customer Service</h5>
                        <ul>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                            <li><a href="/returns" className="hover:underline">Returns</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold mb-2">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-blue-600"><FaFacebook size={24} /></a>
                            <a href="https://instagram.com" className="hover:text-pink-600"><FaInstagram size={24} /></a>
                            <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                            <a href="https://linkedin.com" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="w-full md:w-1/4">
                        <h5 className="text-xl font-bold mb-2">KEEP UP TO DATE </h5>
                        <form action="/subscribe" method="POST" className="flex flex-col">
                            <input type="email" name="email" placeholder="Enter your email" className="p-2 mb-2 rounded-md text-black" />
                            <button type="submit" className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Payment Information */}
                <div className="mt-6 border-t border-gray-600 pt-4">
                    <h5 className="text-xl font-bold mb-2">We Accept</h5>
                    <div className="flex space-x-4">
                        <img src="https://via.placeholder.com/50x30?text=Visa" alt="Visa" />
                        <img src="https://via.placeholder.com/50x30?text=MasterCard" alt="MasterCard" />
                        <img src="https://via.placeholder.com/50x30?text=PayPal" alt="PayPal" />
                        <img src="https://via.placeholder.com/50x30?text=Amex" alt="American Express" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
