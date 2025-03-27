import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="relative h-[600px] w-full overflow-hidden" id={"home"}>
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/agriculture-hero.png" // Add this image to your public folder
                    alt="Agriculture field"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        AgroCloud bilan qishloq xo&apos;jaligingizni rivojlantiring
                    </h1>
                    <p className="text-xl text-white/90 mb-8">
                        AgroCloud sizning qishloq xo&apos;jaligi faoliyatingizni optimallashtirish,
                        hosilni ko&apos;paytirish va barqaror dehqonchilik amaliyotlariga hissa qo&apos;shish
                        uchun ilg&apos;or texnologiyalarni taqdim etadi.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#about"
                            className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
                        >
                            Biz haqimizda
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-6 rounded-md transition-colors text-center"
                        >
                            Bog&apos;lanish
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;