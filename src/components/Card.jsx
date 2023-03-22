import { useState } from 'react';
import Link from 'next/link';

function Card() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
          className={`card ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <Link href="/Diagram">
            <h2>Card Title</h2>
            <p>Card content goes here...</p>
            {isHovered && (
                <div className="popup">
                    <img src="/my-image.jpg" alt="My Image" />
                </div>
            )}
            </Link>
        </div>
    )
}
export default Card;
