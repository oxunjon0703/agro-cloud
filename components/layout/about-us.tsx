import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="py-16 bg-white" id="about">
            <div className="container mx-auto px-4">
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                                AgroCloud – Aqlli Qishloq Xo&apos;jaligi Yechimlari
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                Zamonaviy texnologiyalar yordamida qishloq xo&apos;jaligida inqilob! AgroCloud sun&apos;iy intellekt (AI)
                                va IoT tizimlaridan foydalangan holda fermerlarga hosildorlikni oshirish, resurslarni
                                samarali boshqarish imkonini beradi.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Aqlli monitoring tizimlari orqali suv, o&apos;g&apos;it va tuproq sifatini real vaqt rejimida
                                nazorat qiling va ilg&apos;or qishloq xo&apos;jaligi texnologiyalari bilan natijalaringizni yaxshilang!
                            </p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="overflow-hidden rounded-lg shadow-lg h-72 col-span-2 mt-4">
                                <Image
                                    src="/images/main.png"
                                    alt="Smart farming technology"
                                    width={800}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-800 shadow-md">
                            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Hosildorlikni oshirish</h3>
                            <p className="text-gray-700">AI va IoT yordamida hosilingizni maksimal darajaga chiqaring.</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-800 shadow-md">
                            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Real vaqt monitoringi</h3>
                            <p className="text-gray-700">Dalalaringiz holatini har doim nazorat qilib turing.</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-800 shadow-md">
                            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Resurslarni tejash</h3>
                            <p className="text-gray-700">Suv, o&apos;g&apos;it va boshqa resurslarni optimal foydalanish imkoniyati.</p>
                        </div>
                    </div>
                </div>

                {/* Feature section 1 */}
                <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
                    <div className="md:w-1/2">
                        <Image
                            src="/images/agriculture.jpg"
                            alt="AI Protection System"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                            Sun&apos;iy intellekt bilan hosilingizni himoya qiling
                        </h3>
                        <p className="text-gray-700 mb-6">
                            AgroCloud innovatsion texnologiyalari bilan hosilingizni zararkunandalardan himoya qiling!
                            Sun&apos;iy intellekt (AI) va IoT sensorlari yordamida ekin maydonlaridagi zararli hasharotlar va
                            kasalliklarni erta aniqlang. Aqlli tizimlar real vaqt rejimida ma&apos;lumotlarni tahlil qilib,
                            fermerlarga samarali kurash usullarini tavsiya etadi.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-800">
                            <p className="text-gray-700">
                                Natijada pestitsidlardan optimal foydalanish, hosildorlikni oshirish va ekinlarni tabiiy
                                muhitga zarar yetkazmasdan himoya qilish imkoniyati yaratiladi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature section 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-20 gap-8">
                    <div className="md:w-1/2">
                        <Image
                            src="/images/agriculture2.png"
                            alt="IoT Sensors"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                            IoT Sensorlari – Aqlli Monitoring Tizimi
                        </h3>
                        <p className="text-gray-700 mb-6">
                            AgroCloud IoT sensorlari yordamida ekinlaringiz uchun optimal sharoitlarni yarating!
                            Yerga joylashtirilgan tuproq namligi va harorati sensorlari real vaqt rejimida ma&apos;lumot
                            to&apos;playdi va ularni tahlil qilib, fermerlarga aniq tavsiyalar beradi.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 p-4 rounded-md">
                                <p className="font-medium text-blue-800 mb-1">🔹 Tuproq namligini nazorat qilish</p>
                                <p className="text-sm text-gray-700">Sug&apos;orish jarayonini avtomatlashtirish va suvni tejash imkoniyati.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <p className="font-medium text-blue-800 mb-1">🔹 Harorat monitoringi</p>
                                <p className="text-sm text-gray-700">Ekstremal ob-havo sharoitlarida hosilni himoya qilish.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md sm:col-span-2">
                                <p className="font-medium text-blue-800 mb-1">🔹 Real vaqt rejimidagi kuzatuv</p>
                                <p className="text-sm text-gray-700">Sensorlar uzatuvchi ma&apos;lumotlar orqali ekin holatini doimiy nazorat qilish.</p>
                            </div>
                        </div>
                        <div className="font-medium text-green-700">
                            Natija: Hosildorlikni oshirish, suv va resurslardan samarali foydalanish!
                        </div>
                    </div>
                </div>

                {/* Feature section 3 */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                            Dronlar va ma&apos;lumotlarga asoslangan boshqaruv
                        </h3>
                        <p className="max-w-3xl mx-auto text-gray-700">
                            Zamonaviy dron texnologiyalari yordamida qishloq xo&apos;jaligingizni yangi bosqichga olib chiqing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/aq1.jpg"
                                    alt="Aqlli kuzatuv"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-blue-800 mb-2">1. Aqlli kuzatuv</h4>
                                <p className="text-gray-700">Dronlar yuqori aniqlikdagi tasvirlarni yig&apos;ib, dalalardagi muammolarni erta aniqlaydi.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/aq2.jpg"
                                    alt="Zararkunandalarga qarshi kurash"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-blue-800 mb-2">2. Zararkunandalarga qarshi kurash</h4>
                                <p className="text-gray-700">AI tahlil asosida zararlangan hududlarni aniqlab, pestitsidlarni aniq va samarali tarqatadi.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/aq3.jpg"
                                    alt="Hosildorlikni oshirish"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-blue-800 mb-2">3. Hosildorlikni oshirish</h4>
                                <p className="text-gray-700">Erta ogohlantirish va optimallashtirilgan resurs taqsimoti natijasida maksimal natijaga erishing!</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/aq4.jpg"
                                    alt="Ma'lumotlarga asoslangan boshqaruv"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-blue-800 mb-2">4. Ma&apos;lumotlarga asoslangan boshqaruv</h4>
                                <p className="text-gray-700">Dalalar haqidagi aniq ma&apos;lumotlar asosida optimal qishloq xo&apos;jaligi strategiyalarini ishlab chiqing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;