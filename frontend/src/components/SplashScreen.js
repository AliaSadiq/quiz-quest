// // Import necessary libraries
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Html, useTexture } from '@react-three/drei';
// import { useState } from 'react';

// // Main SplashScreen component
// function SplashScreen() {
//   const [hovered, setHovered] = useState(false);
  
//   // Load the logo texture
//   const logoTexture = useTexture('../images/quiz(logo).png');

//   // Render the splash screen
//   return (
//     <div className="splash-screen-container">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <Suspense fallback={null}>
//           {/* Display the logo */}
//           <mesh
//             onPointerOver={() => setHovered(true)}
//             onPointerOut={() => setHovered(false)}
//             scale={hovered ? [1.2, 1.2, 1] : [1, 1, 1]}
//           >
//             <planeGeometry args={[3, 3]} />
//             <meshBasicMaterial map={logoTexture} transparent />
//           </mesh>

//           {/* Add quest text below the logo */}
//           <Html position={[0, -2, 0]}>
//             <div className="quest-text" style={{ textAlign: 'center', color: 'black', fontSize: '2rem' }}>
//               Quest
//             </div>
//           </Html>
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// export default SplashScreen;import React, { Suspense, useState } from 'react';import React from 'react';
import '../App.css'; // Import CSS file for styling

const SplashScreen = () => {
  return (
    <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="boom-container second">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      
    </div>
  );
};

export default SplashScreen;
