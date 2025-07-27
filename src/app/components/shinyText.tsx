import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 1, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        // CHANGEMENT ICI : Le <div> a été remplacé par un <span>
        // Un <span> est un élément de type "inline", ce qui permet de l'imbriquer correctement dans une balise <p>.
        <span
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 60%)',
                backgroundSize: '50% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
                // Assurez-vous que ces propriétés sont bien appliquées si elles sont nécessaires pour l'effet visuel complet
                // WebkitTextFillColor: 'transparent', // Souvent nécessaire pour que le dégradé soit visible sur le texte
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: '-100%', // Position initiale pour l'animation de brillance
            }}
        >
            {text}
        </span>
    );
};

export default ShinyText;

// Les commentaires pour tailwind.config.js sont inclus ici à titre de référence.
// Assurez-vous que ces configurations sont bien présentes dans votre fichier tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };