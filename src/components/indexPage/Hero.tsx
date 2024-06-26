import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className=" pt-52 sm:pt-40 md:pt-36 lg:pt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                            SnapSqueeze
                        </h1>
                        <h2 className="text-2xl md:text-3xl mb-6 text-center md:text-left">
                            Compressez vos images en un clic !
                        </h2>
                        <p className="text-lg mb-8 text-center md:text-left">
                            Optimisez vos images sans compromettre la qualité. <br /> Rapide, facile et efficace.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a href="/compressor">
                                <motion.button
                                    className="bg-slate-100 dark:bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Commencer maintenant
                                </motion.button>
                            </a>
                        </div>

                    </div>
                    <div className="md:w-1/2">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                src="https://app.vidzflow.com/v/y8IIeOELsg?dq=576&ap=false&muted=true&loop=false&ctp=true&bv=false&piv=false&playsinline=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
                                title="Presentation video"
                                className="absolute top-0 left-0 w-full h-full"
                                allow="fullscreen"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;