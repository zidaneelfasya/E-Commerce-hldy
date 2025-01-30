import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-purple-800 text-white py-6">
            <div className="container mx-auto">
                <div className="footer-top flex justify-between items-start space-x-8">
                    <div className="footer-brand flex flex-col items-start">
                        <a href="#" className="logo">
                            <img src="logo.png" alt="logo" className="w-8" />
                        </a>
                        <p className="footer-text mt-4">
                            ZidunMerce is a platform that provides a variety of products
                        </p>
                    </div>
                    <ul className="footer-list space-y-2">
                        <li><p className="footer-list-title font-bold">Company</p></li>
                        <li><a href="#" className="footer-link">About us</a></li>
                        <li><a href="#" className="footer-link">Pricing plans</a></li>
                        <li><a href="#" className="footer-link">Contacts</a></li>
                    </ul>
                    <ul className="footer-list space-y-2">
                        <li><p className="footer-list-title font-bold">Support</p></li>
                        <li><a href="#" className="footer-link">Help center</a></li>
                        <li><a href="#" className="footer-link">Ask a question</a></li>
                        <li><a href="#" className="footer-link">Privacy policy</a></li>
                        <li><a href="#" className="footer-link">Terms & conditions</a></li>
                    </ul>
                </div>
                <div className="footer-bottom text-center mt-8">
                    <p className="copyright text-sm">
                        &copy; 2024 <a href="#" className="footer-link">Green Loop</a>. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
