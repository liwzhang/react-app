import React from 'react';
import Restroom from './Restroom/Restroom';

const restlist = (props) => {
    return props.restlist.map((restroom, index) => {
        return (
            <Restroom
                name={restroom.name}
                rating={restroom.rating}
                key={restroom.id}
            />
        );
    });
};

export default restlist;
