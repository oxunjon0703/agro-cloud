import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company info */}
                    <div>
                        <Image
                            src="/logo.jpg"
                            alt="Agro Cloud Logo"
                            width={200}
                            height={200}
                        />
                        <h3 className="text-xl font-bold">Agro Cloud</h3>
                        <p className="mb-4">Smart Agriculture Platform</p>
                    </div>

                    {/* Navigation links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Foydali havolalar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="hover:text-blue-200 transition-colors">
                                    Bosh sahifa
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-blue-200 transition-colors">
                                    Biz haqimizda
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-blue-200 transition-colors">
                                    Bog&apos;lanish
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Bizning manzil</h3>
                        <div className="h-64 w-full bg-blue-700 rounded-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.5480668830683!2d66.92984581179286!3d39.65988437145278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1915ccbdcf4f%3A0x12f6d10af242d504!2sSamarkand%20Institute%20of%20Veterinary%20Medicine%2C%20Animal%20Husbandry%20and%20Biotechnology!5e0!3m2!1sru!2s!4v1743066493195!5m2!1sru!2s"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-700 mt-8 pt-6 text-center">
                    <p>© {new Date().getFullYear()} Agro Cloud. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;