import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
    icon: string;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <motion.div
        className="rounded-lg shadow-md p-6 flex flex-col items-center text-center bg-slate-50 dark:bg-slate-900"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
    >
        <div className="text-4xl mb-4 ">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="">{description}</p>
    </motion.div>
);

const Features: React.FC = () => {
    const features = [
        {
            icon: '🚀',
            title: 'Compression Rapide',
            description: 'Réduisez la taille de vos fichiers en quelques secondes.'
        },
        {
            icon: '🎨',
            title: 'Qualité Préservée',
            description: 'Optimisez sans compromettre la qualité visuelle.'
        },
        {
            icon: '📁',
            title: 'Multi-formats',
            description: "Prise en charge de divers formats d'images et de documents."
        },
        {
            icon: '🔒',
            title: 'Sécurité Garantie',
            description: 'Vos fichiers sont traités en toute sécurité et confidentialité.'
        }
    ];

    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Fonctionnalités
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <Feature {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;