import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef, useState } from 'react'

function RotatingKnot() {
    const meshRef = useRef()
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            })
        })
    }

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2
            meshRef.current.rotation.y += delta * 0.3
            // Parallax interaction
            meshRef.current.rotation.x += (mousePos.y * 0.5 - meshRef.current.rotation.x) * 0.05
            meshRef.current.rotation.y += (mousePos.x * 0.5 - meshRef.current.rotation.y) * 0.05
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <torusKnotGeometry args={[9, 2.5, 120, 16]} />
            <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.2} />
        </mesh>
    )
}

export default function Background3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 30] }}>
                <RotatingKnot />
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} color="#0ea5e9" />
            </Canvas>
        </div>
    )
}
