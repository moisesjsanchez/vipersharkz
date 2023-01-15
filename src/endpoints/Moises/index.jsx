import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

class Moises extends React.Component {

    render() {
        return (
            <Canvas>
                <mesh>
                    <sphereGeometry args={ [1.5, 32, 32]} />
                    <meshBasicMaterial color="red" wireframe />
                    <Html> Hello this is my page </Html>
                </mesh>
            </Canvas>
        )
    }
}


export default Moises;