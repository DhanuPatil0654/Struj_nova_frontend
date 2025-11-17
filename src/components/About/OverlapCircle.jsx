import React, { useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function OverlapCircle({ img }) {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  React.useEffect(() => {
    if (hovered) {
      let val = 0;
      intervalRef.current = setInterval(() => {
        val += 2;
        setProgress(Math.min(val, 100));
        if (val >= 100) clearInterval(intervalRef.current);
      }, 10);
    } else {
      setProgress(0);
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered]);

  return (
    <div
      className="overlap-circle"
      style={{
        width: 64,
        height: 64,
        position: 'absolute',
        top: '-24px',
        left: '-24px',
        zIndex: 2,
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
        {hovered && (
          <CircularProgressbar
            value={progress}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: '#1ec773',
              trailColor: '#eee',
              pathTransition: "stroke-dashoffset 0.3s ease 0s"
            })}
          />
        )}
      </div>
      <img
        src={img}
        alt="Charger"
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          position: 'absolute',
          top: 6,
          left: 6,
          background: '#e9f3fd'
        }}
      />
    </div>
  );
}
export default OverlapCircle;
