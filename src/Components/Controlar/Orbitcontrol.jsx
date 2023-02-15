import { Environment, OrbitControls, PerspectiveCamera,MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { angleToRadians } from "./utils";
import * as THREE from "three";
import Honda from '../Honda/Honda';

export default function Three() {

    // Code to move the camera around
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if (!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            orbitControlsRef.current.update();
        }
    })

    return (
        <>
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />


            {/* Honda */}
            <Honda />
              
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
          </mesh>
            {/* Ambient light */}
            <ambientLight args={["#ffffff", 0.25]} />

            {/* Spotlight light */}
            <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

            {/* Environmnet */}
            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
                </mesh>
            </Environment>
        </>
    )
}