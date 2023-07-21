import React from 'react'
import NoFile from './NoFile'

const Image = ({ image }) => {
    return (
        <div className='picker-image'>
            {image
                ? (
                    <>
                        <img src={image} alt="selected pic" />
                    </>
                )
                : (
                    <NoFile />
                )
            }
        </div>
    )
}

export default Image