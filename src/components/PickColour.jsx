import React from 'react'

const PickColour = ({ openEyeDropper, isDisabled }) => {
    return (
        <div className='picker-form'>
            <p>2. Pick colour</p>
            <button
                onClick={openEyeDropper}
                disabled={isDisabled}
            >
                Open EyeDropper
            </button>
        </div>
    )
}

export default PickColour