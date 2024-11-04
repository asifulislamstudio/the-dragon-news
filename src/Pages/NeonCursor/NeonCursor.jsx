import React, { useEffect } from 'react';
// Import neonCursor function from threejs-toys
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

const NeonCursor = () => {
  useEffect(() => {
    // Apply the neonCursor effect on the app div after the component mounts
    neonCursor({
      el: document.getElementById('appp'),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    });
  }, []);

  return (
    <div
      id="appp"
      className="w-full h-screen bg-black overflow-hidden text-white font-sans text-center relative"
    >
      <div
        id="hero"
        className="flex flex-col items-center justify-center h-full text-shadow-md"
      >
        <h1 className="text-[60px] leading-[80px] uppercase">
          NEON<br />CURSOR
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/klevron/threejs-toys"
          className="mt-2 text-white underline"
        >
          github/threejs-toys
        </a>
      </div>
    </div>
  );
};

export default NeonCursor;
