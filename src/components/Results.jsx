import React from 'react'

const Results = ({ handleCopy, colourHEX, isCopied, isDisabled }) => {
    return (
        <div className='picker-results'>
            <p>{isCopied ? "Colour copied to clipboard" : "3. View Selected"}</p>
            <button style={{ backgroundColor: colourHEX }}
                onClick={handleCopy}
                disabled={isDisabled}
            >
                <span>{colourHEX}</span>
            </button>
        </div>
    )
}

export default Results