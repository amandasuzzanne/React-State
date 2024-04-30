import React, { useState } from 'react'
import './ImageResizer.css'
import brain from '../images/brain.jpeg'

function ImageResizer() {
    // State variables for width and height
    const [width, setImageWidth] = useState(100);
    const [height, setImageHeight] = useState(100);

    // Event handler for width slider change
    const handleWidthChange = (e) => {
        setImageWidth(parseInt(e.target.value));
    };

    // Event handler for height slider change
    const handleHeightChange = (e) => {
        setImageHeight(parseInt(e.target.value));
    };

    return (
        <div>
            <div className='main'>
                <div>
                    <p><strong>Practice Working With State</strong></p>
                </div>

                <div className='slider'>
                    <label>Width:</label>
                    <input
                        type="range"
                        min="50"
                        max="500"
                        value={width}
                        onChange={handleWidthChange}
                    />

                    <label>Height:</label>
                    <input
                        type="range"
                        min="50"
                        max="500"
                        value={height}
                        onChange={handleHeightChange}
                    />
                </div>
            </div>

            <div>
                <img src={brain} alt="brain" className="resizable-image" style={{ width: `${width}px`, height: `${height}px` }} />
            </div>
        </div>
    )
}

export default ImageResizer