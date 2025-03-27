import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import Link from 'next/link';

const ContactUs = () => {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                        Biz bilan bog&apos;laning
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-700">
                        AgroCloud jamoasi sizning savollaringizga javob berish va qishloq xo&apos;jaligi
                        texnologiyalaringizni yaxshilashga yordam berish uchun doimo tayyor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information Cards */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <Phone className="text-blue-800 h-7 w-7" />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-xl mb-3">Telefon</h4>
                        <p className="text-gray-700">+998 93 042 1242</p>
                        <p className="text-gray-700">+998 88 040 1242</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <Mail className="text-blue-800 h-7 w-7" />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-xl mb-3">Email</h4>
                        <p className="text-gray-700">abdusalomovfarruh822@gmail.com</p>
                        <p className="text-gray-700">farruhabdusalomov3@gmail.com</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <MapPin className="text-blue-800 h-7 w-7" />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-xl mb-3">Manzil</h4>
                        <p className="text-gray-700">Samarqand, Mirzo Ulugʻbek koʻchasi, 77</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-blue-800 mb-6">Ijtimoiy tarmoqlar</h3>
                    <div className="flex justify-center gap-6">
                        <Link href="https://facebook.com" className="bg-blue-100 p-4 rounded-full hover:bg-blue-200 transition-colors">
                            <Facebook className="text-blue-800 h-6 w-6" />
                        </Link>
                        <Link href="https://instagram.com" className="bg-blue-100 p-4 rounded-full hover:bg-blue-200 transition-colors">
                            <Instagram className="text-blue-800 h-6 w-6" />
                        </Link>
                        <Link href="https://t.me" className="bg-blue-100 p-4 rounded-full hover:bg-blue-200 transition-colors">
                            <Send className="text-blue-800 h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;