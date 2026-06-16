import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
  moonColor?: string;
  starColor?: string;
  eyeColor?: string;
}

export default function Logo({
  className = 'h-10 md:h-12 w-auto',
  textColor = '#ffffff',
  moonColor = '#ffffff',
  starColor = '#FFE100',
  eyeColor = '#32005a',
}: LogoProps) {
  const sources = [
    '/input_file_1.png',
    '/input_file_0.png',
    '/input_file_2.png',
    '/input_file.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSvg, setShowSvg] = useState(false);

  const handleError = () => {
    if (currentIndex < sources.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSvg(true);
    }
  };

  if (showSvg) {
    return (
      <svg
        viewBox="0 0 280 60"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Premier Inn Logo"
        role="img"
      >
        {/* Elegantly styled serif letterforms replicating "Premier Inn" */}
        <text
          x="2"
          y="42"
          fill={textColor}
          fontSize="34"
          fontWeight="700"
          fontFamily="'Lora', 'Georgia', 'Playfair Display', 'Times New Roman', serif"
          letterSpacing="-0.2px"
        >
          Premier Inn
        </text>

        {/* Group containing the iconic sleeping moon face and three gold starbursts */}
        <g transform="translate(208, -1) scale(0.63)">
          {/* White crescent moon with detailed sleeping nose/lip/chin contour silhouette */}
          <path
            d="M 50,10 A 40 40 0 1 0 50,90 C 45,81 37,76 37,70 C 37,66 33,64 29,64 C 29,60 22,59 22,52 C 22,46 35,41 35,34 C 35,24 45,17 50,10 Z"
            fill={moonColor}
          />

          {/* Closed sleeping eye line (negative/cutout stroke in background color) */}
          <path
            d="M 40,43 Q 45,46 49,42"
            stroke={eyeColor}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Eyelash details */}
          <path
            d="M 44,45 L 45,49"
            stroke={eyeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Large starburst at coordinates 12, 28 */}
          <path
            d="M 0,-14 L 3,-4 L 11,-11 L 4,-2 L 14,0 L 4,2 L 11,11 L 3,4 L 0,14 L -3,4 L -11,11 L -4,2 L -14,0 L -4,-2 L -11,-11 L -3,-4 Z"
            fill={starColor}
            transform="translate(12, 28)"
          />

          {/* Small starburst at top right (coordinates 68, 12) */}
          <path
            d="M 0,-14 L 3,-4 L 11,-11 L 4,-2 L 14,0 L 4,2 L 11,11 L 3,4 L 0,14 L -3,4 L -11,11 L -4,2 L -14,0 L -4,-2 L -11,-11 L -3,-4 Z"
            fill={starColor}
            transform="translate(68, 12) scale(0.55)"
          />

          {/* Medium starburst at bottom left (coordinates 10, 64) */}
          <path
            d="M 0,-14 L 3,-4 L 11,-11 L 4,-2 L 14,0 L 4,2 L 11,11 L 3,4 L 0,14 L -3,4 L -11,11 L -4,2 L -14,0 L -4,-2 L -11,-11 L -3,-4 Z"
            fill={starColor}
            transform="translate(10, 64) scale(0.75)"
          />
        </g>
      </svg>
    );
  }

  return (
    <img
      src={sources[currentIndex]}
      alt="Premier Inn"
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
}
