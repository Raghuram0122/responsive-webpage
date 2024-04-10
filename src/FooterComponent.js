import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
    return (
        <footer className="p-6 ml-4 mt-[120px] lg:ml-[40px]">
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>
            <div className="grid grid-cols-4 gap-8 mt-24 justify-items-center">
                <div className="col-span-1">
                    <h3 className="font-bold mb-4 font-sans">PRODUCT</h3>
                    <ul className="space-y-2 text-neutral-500 font-sans">
                        <li>Website Design</li>
                        <li>Online Stores</li>
                        <li>Photo studio</li>
                        <li>Features</li>
                        <li>Themes</li>
                        <li>Pricing</li>
                        <li>App Center</li>
                        <li>Mobile Apps</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="font-bold mb-4 font-sans">Resources</h3>
                    <ul className="space-y-2 text-neutral-500 font-sans">
                        <li>Blog</li>
                        <li>Success Stories</li>
                        <li>Developer Docs</li>
                        <li>Affilates</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="font-bold mb-4 font-sans">Support</h3>
                    <ul className="space-y-2 text-neutral-500 font-sans">
                        <li>Support Center</li>
                        <li>Community</li>
                        <li>Partner Community</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="font-bold mb-4 font-sans">Company</h3>
                    <ul className="space-y-2 text-neutral-500 font-sans">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Additional California Privacy Disclosure</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-around mt-10">
                <p className="text-gray-500 text-sm">© 2024 Square.Inc</p>
                <div className="flex justify-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.location.href = "#"} role="link">
                        <FontAwesomeIcon icon={faFacebookSquare} className="text-xl" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.location.href = "#"} role="link">
                        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.location.href = "#"} role="link">
                        <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.location.href = "#"} role="link">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.location.href = "#"} role="link">
                        <FontAwesomeIcon icon={faGoogle} className="text-xl" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;