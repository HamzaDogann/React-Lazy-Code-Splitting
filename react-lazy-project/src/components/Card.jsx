import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div className='card'>
            <h3 className='mb-4 text-[25px]'>{title}</h3>
            <p className='text-[16px]'>{description}</p>
        </div>
    )
}

export default Card