import React, { useState } from 'react'
import Image from './Image'
import SelectImage from './SelectImage'
import PickColour from './PickColour'
import Results from './Results'

const ColourPicker = () => {
    const [colourHEX, setColourHEX] = useState("Colour result")
    const [image, setImage] = useState(null)
    const [isCopied, setIsCopied] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)

    const handleImageInput = (e) => {
        try {
            setImage(URL.createObjectURL(e.target.files[0]))
            setIsDisabled(false)

        } catch (error) {
            console.error(error)
            setImage(null)
        }
    }

    const openEyeDropper = async () => {
        let picker = new window.EyeDropper()

        try {
            const { sRGBHex } = await picker.open()
            setColourHEX(sRGBHex)
        } catch (error) {
            console.error(error)
        }
    }

    const handleCopy = async () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);

        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(colourHEX)
        } else {
            return document.execComand("copy", true, colourHEX)
        }
    }

    return (
        <section className='wrapper '>
            <h1>Pick colour from an image</h1>
            <SelectImage handleImageInput={handleImageInput} />
            <Image image={image} />
            <PickColour
                isDisabled={isDisabled}
                openEyeDropper={openEyeDropper}
            />
            <Results
                isDisabled={isDisabled}
                handleCopy={handleCopy}
                colourHEX={colourHEX}
                isCopied={isCopied}
            />
        </section >
    )
}

export default ColourPicker