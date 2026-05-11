import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;

const defaultCopy = {
    loading: 'Loading Portfolio'
};

export default function Preloader({ copy = defaultCopy }) {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const sectionCopy = { ...defaultCopy, ...copy };

    useEffect(() => {
        // Animasi persentase pemuatan (fake loading simulation)
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Tahan layar di 100% sebentar sebelum tertutup (700ms)
                    setTimeout(() => setIsLoading(false), 700);
                    return 100;
                }
                return prev + 5;
            });
        }, 40); // 40ms * 20 putaran = 800ms

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <MotionDiv
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: '#08080b',
                        zIndex: 999999, // Harus paling atas
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#f1f5f9'
                    }}
                >
                    {/* Inisial M B S (Muhammad Bayu Satrio) */}
                    <MotionDiv
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <h1 style={{ fontSize: '5rem', fontWeight: 800, background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: '1.5rem', letterSpacing: '4px' }}>
                            M B S
                        </h1>

                        {/* Progress Bar Line */}
                        <div style={{ width: '220px', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                            <MotionDiv
                                style={{ height: '100%', background: 'linear-gradient(to right, #38bdf8, #818cf8)', width: `${progress}%`, borderRadius: '10px' }}
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>

                        {/* Counter Angka */}
                        <p style={{ marginTop: '1rem', fontSize: '1.1rem', fontWeight: 600, color: '#64748b' }}>
                            {sectionCopy.loading}... {progress}%
                        </p>
                    </MotionDiv>
                </MotionDiv>
            )}
        </AnimatePresence>
    );
}
