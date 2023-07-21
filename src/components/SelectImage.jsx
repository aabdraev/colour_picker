import React from 'react'

const SelectImage = ({ handleImageInput }) => {
    return (
        <div className='picker-select'>
            <p>1. Select an image</p>
            <input
                onChange={handleImageInput}
                type="file"
                id="file"
                name="file"
                accept="image/*"
            />
        </div>
    )
}

export default SelectImage