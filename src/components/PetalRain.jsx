import React from 'react';
import petal1 from '../assets/petal1.png';
import petal2 from '../assets/petal2.png';
import petal3 from '../assets/petal3.png'; 
import './PetalRain.css'; // estilos separados

const petalsImgs = [petal1, petal2, petal3];

const PetalRain = ({ isVisible }) => {
    const numPetals = 30;
    const petals = Array.from({ length: numPetals });

    return (
        <div className="petal-rain" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease' }}>
            {petals.map((_, i) => {
                const size = 20 + Math.random() * 30;
                const left = Math.random() * 100;
                const duration = 6 + Math.random() * 5;
                const delay = Math.random() * 5;
                const sway = Math.random() > 0.5 ? 'left' : 'right';
                const img = petalsImgs[i % petalsImgs.length];

                return (
                    <img
                        key={i}
                        src={img}
                        alt="petal"
                        className={`petal sway-${sway}`}
                        style={{
                            left: `${left}vw`,
                            width: `${size}px`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default PetalRain;
