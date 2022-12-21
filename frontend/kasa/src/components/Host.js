import React from 'react';

const Host = ({picture, name}) => {
    return (
        <div className='host'>
            <img src={picture} className='host__picture' alt="host"/>
            <p className='host__name'>{name}</p>
        </div>
    );
};

export default Host;