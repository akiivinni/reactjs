import React, { useState } from "react";

const Usestate = () => {
    const [names, setNames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        const newNames = ["John", "Jane", "Alice", "Bob"]; // Add your desired names here
        if (currentIndex < newNames.length) {
            setNames([...names, newNames[currentIndex]]);
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Usestate;
