import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="w-full">
            {/* Top header with contact info and social links */}
            <div className="bg-blue-800 py-2 text-white text-sm">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>+998 71 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>info@agrocloud.uz</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Tashkent, Uzbekistan</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <Link href="https://facebook.com" className="hover:text-blue-200 transition-colors">
                            <Facebook size={18} />
                        </Link>
                        <Link href="https://instagram.com" className="hover:text-blue-200 transition-colors">
                            <Instagram size={18} />
                        </Link>
                        <Link href="https://t.me" className="hover:text-blue-200 transition-colors">
                            <Send size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main navbar with logo and navigation */}
            <div className="bg-background shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-x-2 font-bold text-xl text-primary">
                            <Image
                                src={"/logo.jpg"}
                                alt={"logo"}
                                width={40}
                                height={40}
                            />
                            Agro Cloud
                        </Link>

                        <nav className="hidden md:flex items-center space-x-6">
                            <Link
                                href="#home"
                                className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                                Bosh sahifa
                            </Link>
                            <Link
                                href="#about"
                                className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                                Biz haqimizda
                            </Link>
                            <Link
                                href="#contact"
                                className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                                Bog&apos;lanish
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <button className="md:hidden p-2 rounded-md text-foreground hover:bg-accent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;