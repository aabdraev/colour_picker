import React, { useState } from 'react'

const ColourPicker = () => {
    const [colourHEX, setColourHEX] = useState("#000000")
    // const [colourRGB, setColourRGB] = useState("#000000")
    const [image, setImage] = useState(null)

    const openEyeDropper = async () => {
        let picker = new window.EyeDropper()

        try {
            const { sRGBHex } = await picker.open()
            setColourHEX(sRGBHex)
        } catch (error) {
            console.error(error)
        }
    }

    const handleImageInput = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleCopy = async () => {
        await navigator.clipboard.writeText(colourHEX)
    }

    return (
        <section className='wrapper'>
            <h1>Pick colour from an image</h1>
            <div className='picker-form'>
                <h2>Pick colour</h2>
                <button
                    onClick={openEyeDropper}
                >
                    Open EyeDropper
                </button>
            </div>
            <div className='picker-bottom'>
                <h2>View Selected</h2>
                {/* <span>{colourHEX}</span> */}
                <button
                    onClick={handleCopy}
                >
                    <span>{colourHEX}</span>
                </button>
            </div>
            <div className='picker-top'>
                <p>Select an image</p>
                <input
                    onChange={handleImageInput}
                    type="file"
                    accept="image/*"
                />
            </div>

            <div className='picker-image'>
                {image
                    ? (
                        <>
                            <img src={image} alt="selected pic" />
                        </>
                    )
                    : (
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="4em"
                            width="4em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path>
                            <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"></path>
                        </svg>
                    )
                }
            </div>
        </section >
    )
}

export default ColourPicker