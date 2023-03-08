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
            <Link href="/diagram">
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


/*
MossMotors reference

For each card, when a user clicks on one it will direct the user to its own page.
That page will have a diagram image with a list of respective parts below it.

For each diagram screen, there will be a button for each part numbered(key#) incrementally respectively, pointing to its corresponding motor part on the diagram. When the user hovers over the button, it highlights the button and shows a label of what part the button is pointing to. When the user clicks on the button, a small pop up screen appears in the middle of the main screen. The pop up screen will show the corresponding parts as a list which will look just like the rows in the database.
Below the actual diagram will be the complete list of all parts available in the database corresponding to the parts on the current diagram.

So basically, each pop up will display only the parts on the current numbered button.
Think of each pop up as a sublist of the parts (according to their key#).

*/