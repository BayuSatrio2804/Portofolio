import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        const handleMouseOver = (e) => {
            // Perbesar kursor jika menyentuh tombol, link, atau gambar
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'IMG' ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <style>
                {`
          * {
            cursor: none !important;
          }
        `}
            </style>

            {/* Cincin luar (melayang lebih lambat) */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    border: '1px solid #38bdf8',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    borderWidth: isHovered ? '0px' : '1px'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />

            {/* Titik dalam (mengikuti lebih cepat) */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 6,
                    top: 6,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    translateX: useSpring(cursorX, { damping: 40, stiffness: 400 }),
                    translateY: useSpring(cursorY, { damping: 40, stiffness: 400 }),
                }}
                animate={{
                    opacity: isHovered ? 0 : 1
                }}
            />
        </>
    );
}
