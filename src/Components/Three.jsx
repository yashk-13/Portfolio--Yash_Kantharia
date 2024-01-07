import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

export default function Three() {
 
  const splineRef = useRef(null);

  const handleMouseEnter = () => {
    if (splineRef.current) {
      splineRef.current.rotate({ y: 45 }); // Adjust the rotation angle as needed
    }
  };

  const handleMouseLeave = () => {
    if (splineRef.current) {
      splineRef.current.rotate({ y: 0 }); // Reset to the initial rotation
    }
  };
  
 
  return (
    <div className=""  onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <Spline scene="https://prod.spline.design/L1bbnixupCjTa2kE/scene.splinecode" />
    </div>
  );
}
