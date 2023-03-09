import brakeGear from '/images/brakeGear.png';
import Image from 'next/image';
import React, { useState } from 'react';
import SubScreen from './Subscreen';

export default function Flow() {
    const [showSubScreen, setShowSubScreen] = useState(false); // react hook to manage state

    const handleClick = () => { // event handler called 'handleClick' opens subscreen
        setShowSubScreen(true); // updates the value of showSubScreen to true -> triggering a re-rendering of the component
    };

    const handleCloseSubScreen = () => { // event handler called 'handleCloseSubScreen' closes subscreen
        setShowSubScreen(false); // updates the value of showSubScreen to false
    };

    return (
        <div style={{ width: '600px', height: '400px', position: "relative" }}>
            <div style={{ position: "absolute", top: "100px", left: "200px" }}>
                <button className="flex justify-center items-center w-5 h-5 text-lg border border-black rounded-full hover:bg-yellow-300" onClick={handleClick}>
                    <span className="hidden absolute top-1 left-5 bg-gray-300 px-2 py-1 rounded-lg text-black font-thin border border-black">Washer</span>
                    1
                </button>
                {showSubScreen && <SubScreen  onClose={handleCloseSubScreen} />}
            </div>
            <div style={{ position: "absolute", top: "287px", left: "220px" }}>
                <button className="flex justify-center items-center w-5 h-5 text-lg border border-black rounded-full hover:bg-yellow-300" >
                    <span className="hidden absolute top-1 left-5 bg-gray-300 px-2 py-1 rounded-lg text-black font-thin border border-black">Lugnut</span>
                    2</button>
            </div>
            <div style={{ position: "absolute", top: "255px", left: "180px" }}>
                <button className="flex justify-center items-center w-5 h-5 text-lg border border-black rounded-full hover:bg-yellow-300">
                    <span className="hidden absolute top-1 left-5 bg-gray-300 px-2 py-1 rounded-lg text-black font-thin border border-black">Pin</span>
                    3</button>
            </div>
            <div style={{ position: "absolute", top: "40px", left: "70px" }}>
                <button className="flex justify-center items-center w-5 h-5 text-lg border border-black rounded-full hover:bg-yellow-300">
                    <span className="hidden absolute top-1 left-5 bg-gray-300 px-2 py-1 rounded-lg text-black font-thin border border-black">Cover</span>
                    4
                </button>
            </div>
            <div style={{ position: "absolute", top: "85px", left: "140px" }}>
                <button className="flex justify-center items-center w-5 h-5 text-lg border border-black rounded-full hover:bg-yellow-300">
                    <span className="hidden absolute top-1 left-5 bg-gray-300 px-2 py-1 rounded-lg text-black font-thin border border-black">Bolt</span>
                    5
                </button>
            </div>
            <Image
                src={brakeGear}
                alt="Example image"
                width={700}
                height={400}
            />
        </div>

    )
}